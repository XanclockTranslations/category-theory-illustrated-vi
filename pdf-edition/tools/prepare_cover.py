"""Prepare an editable, native-vector cover from the author's cover_print.svg.

The English cover keeps the exact original outlined lettering. The labels JSON
also defines a live text layer: change renderMode to "text" and edit its labels
for a localized edition. Local Noto fonts may be embedded for portable Unicode
lettering; the illustration artwork always remains native vector geometry.
"""

from __future__ import annotations

import argparse
import base64
import copy
import hashlib
import json
import re
import xml.etree.ElementTree as ET
from pathlib import Path


EDITION = Path(__file__).resolve().parents[1]
REPO = EDITION.parent
ASSETS = EDITION / "assets" / "cover"
SVG = "http://www.w3.org/2000/svg"
XLINK = "http://www.w3.org/1999/xlink"
INKSCAPE = "http://www.inkscape.org/namespaces/inkscape"
SODIPODI = "http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
ET.register_namespace("", SVG)
ET.register_namespace("xlink", XLINK)
ET.register_namespace("inkscape", INKSCAPE)
ET.register_namespace("sodipodi", SODIPODI)
TAG = lambda value: "{" + SVG + "}" + value
OUTLINE_IDS = {"text1376": "titleLine1", "text1376-0": "titleLine2", "text216": "author"}
UNUSED_TEXT_IDS = {"g23901-6", "text216-5", "text102962"}


def sha256(path: Path) -> str:
    return hashlib.sha256(path.read_bytes()).hexdigest()


def canonical_text_sha256(path: Path) -> str:
    text = path.read_text(encoding="utf-8").replace("\r\n", "\n").replace("\r", "\n")
    return hashlib.sha256(text.encode("utf-8")).hexdigest()


def remove_elements(root: ET.Element, ids: set[str]) -> None:
    for parent in list(root.iter()):
        for element in list(parent):
            if element.get("id") in ids:
                parent.remove(element)


def prefix_ids(root: ET.Element, prefix: str) -> None:
    ids = {element.get("id") for element in root.iter() if element.get("id")}
    for element in root.iter():
        if element.get("id"):
            element.set("id", prefix + element.get("id"))
        for key, value in list(element.attrib.items()):
            if key == "id":
                continue
            value = re.sub(r"url\(#([^)]+)\)", lambda match: "url(#" + prefix + match[1] + ")" if match[1] in ids else match[0], value)
            if key in ("href", "{" + XLINK + "}href") and value.startswith("#") and value[1:] in ids:
                value = "#" + prefix + value[1:]
            element.set(key, value)


def flatten_embedded_svg(root: ET.Element, records: list[dict]) -> None:
    for parent in list(root.iter()):
        for index, image in enumerate(list(parent)):
            if image.tag != TAG("image"):
                continue
            href = image.get("{" + XLINK + "}href", image.get("href", ""))
            if not href.startswith("data:image/svg+xml;base64,"):
                raise ValueError(f"Non-vector or external cover image: {image.get('id')}")
            svg_bytes = base64.b64decode(href.split(",", 1)[1])
            embedded = ET.fromstring(svg_bytes)
            synthesized_viewbox = False
            if not embedded.get("viewBox"):
                # An SVG image without a viewBox renders in its intrinsic
                # width/height coordinate system, then scales as an image.
                # Replacing those dimensions on a nested SVG would instead
                # crop its unscaled paths. Make that original coordinate
                # system explicit before applying the cover placement.
                def pixels(length: str) -> float:
                    match = re.fullmatch(r"\s*([+\-\d.eE]+)(px|mm|cm|in|pt|pc)?\s*", length)
                    if not match:
                        raise ValueError(f"Unsupported intrinsic SVG length: {length}")
                    unit = match[2] or "px"
                    return float(match[1]) * {"px": 1, "mm": 96 / 25.4, "cm": 96 / 2.54, "in": 96, "pt": 96 / 72, "pc": 16}[unit]
                width = pixels(embedded.get("width", ""))
                height = pixels(embedded.get("height", ""))
                embedded.set("viewBox", f"0 0 {width:g} {height:g}")
                synthesized_viewbox = True
            image_id = image.get("id", f"image-{len(records)}")
            prefix_ids(embedded, f"cover-{image_id}-")
            flatten_embedded_svg(embedded, records)
            embedded.set("x", image.get("x", "0"))
            embedded.set("y", image.get("y", "0"))
            embedded.set("width", image.get("width"))
            embedded.set("height", image.get("height"))
            embedded.set("preserveAspectRatio", image.get("preserveAspectRatio", "none"))
            # An <image> viewport clips to its rectangle. Nested <svg> has the
            # same viewport, but make clipping explicit for standalone editors.
            embedded.set("overflow", "hidden")
            wrapper = ET.Element(TAG("g"), {"id": image_id, "data-role": "original-cover-diagram"})
            for attribute in ("transform", "style", "opacity"):
                if image.get(attribute) is not None:
                    wrapper.set(attribute, image.get(attribute))
            wrapper.append(embedded)
            parent.remove(image)
            parent.insert(index, wrapper)
            records.append({
                "id": image_id,
                "embeddedSvgSha256": hashlib.sha256(svg_bytes).hexdigest(),
                "viewBox": embedded.get("viewBox"),
                "synthesizedIntrinsicViewBox": synthesized_viewbox,
                "x": image.get("x", "0"), "y": image.get("y", "0"),
                "width": image.get("width"), "height": image.get("height"),
                "transform": image.get("transform"),
            })


def text_layer(labels: dict, visible: bool) -> ET.Element:
    layer = ET.Element(TAG("g"), {
        "id": "cover-localizable-labels",
        "data-role": "localizable-labels",
        "{" + INKSCAPE + "}groupmode": "layer",
        "{" + INKSCAPE + "}label": "Localizable title and author",
        "style": "display:inline" if visible else "display:none",
    })
    for key in ("titleLine1", "titleLine2", "author"):
        settings = labels["labels"][key]
        attributes = {
            "id": "cover-label-" + key,
            "data-label-key": key,
            "x": str(settings["x"]), "y": str(settings["y"]),
            "text-anchor": "middle",
            "fill": settings["fill"],
            "font-family": settings["fontFamily"],
            "font-size": str(settings["fontSize"]),
            "font-weight": str(settings.get("fontWeight", 400)),
            "font-style": settings.get("fontStyle", "normal"),
        }
        if settings.get("textLength") is not None:
            attributes["textLength"] = str(settings["textLength"])
            attributes["lengthAdjust"] = "spacingAndGlyphs"
        if settings.get("transform"):
            attributes["transform"] = settings["transform"]
        text = ET.SubElement(layer, TAG("text"), attributes)
        text.text = settings["text"]
    return layer


def save_svg(path: Path, root: ET.Element) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    ET.ElementTree(root).write(path, encoding="utf-8", xml_declaration=True)


def embed_fonts(root: ET.Element, labels: dict) -> None:
    """Embed requested local font subsets without changing the editable text."""
    css_parts, files, licenses = [], {}, {}
    for face in labels.get("fontFaces", []):
        package = face["package"]
        if package not in {"noto-sans", "noto-serif"}:
            raise ValueError(f"Unsupported cover font package: {package}")
        weight, style = int(face["weight"]), face.get("style", "normal")
        if weight not in range(100, 901, 100) or style not in {"normal", "italic"}:
            raise ValueError("Invalid cover font weight/style.")
        folder = EDITION / "node_modules" / "@fontsource" / package
        css_path = folder / f"{weight}{'-italic' if style == 'italic' else ''}.css"
        css = css_path.read_text(encoding="utf-8")
        licenses[package] = (folder / "LICENSE").read_text(encoding="utf-8")
        for comment, block in re.findall(r"(/\*[^*]+\*/\s*)(@font-face\s*\{[^}]+\})", css):
            if not any(f"-{subset}-{weight}-" in comment for subset in ("latin", "latin-ext", "vietnamese")):
                continue
            match = re.search(r"url\(([^)]+\.woff2)\)", block)
            if not match:
                raise ValueError(f"Missing WOFF2 source in {css_path.name}")
            font_path = (folder / match[1]).resolve()
            if not font_path.is_relative_to(folder.resolve()):
                raise ValueError("Cover font path escapes its local package.")
            data = font_path.read_bytes()
            relative = font_path.relative_to(EDITION).as_posix()
            files[relative] = hashlib.sha256(data).hexdigest()
            src = "src: url(data:font/woff2;base64," + base64.b64encode(data).decode("ascii") + ") format('woff2');"
            css_parts.append(re.sub(r"src:[^;]+;", lambda _: src, block).replace("font-display: swap;", "font-display: block;"))
    if css_parts:
        style_element = ET.Element(TAG("style"), {"id": "cover-embedded-fonts", "type": "text/css"})
        style_element.text = "\n".join(css_parts)
        metadata = ET.Element(TAG("metadata"), {"id": "cover-font-provenance"})
        metadata.text = json.dumps({"files": files, "licenses": licenses}, ensure_ascii=False)
        root.insert(2, style_element)
        root.insert(3, metadata)


def build_cover_tree(labels: dict) -> tuple[ET.Element, list[dict]]:
    """Compose a cover in memory, allowing localization checks without writes."""
    source = REPO / "cover_print.svg"
    if labels.get("renderMode") not in ("original-outlines", "text"):
        raise ValueError("Cover renderMode must be original-outlines or text.")
    if labels["renderMode"] == "original-outlines" and any(labels["labels"][key]["text"] != value for key, value in {"titleLine1": "Category Theory", "titleLine2": "Illustrated", "author": "Jencel P."}.items()):
        raise ValueError("Changed cover labels require renderMode=text; the English outlined glyphs cannot translate.")
    root = ET.parse(source).getroot()
    root.set("id", "category-theory-illustrated-cover")
    root.set("role", "img")
    root.set("aria-labelledby", "cover-accessible-title cover-accessible-description")
    root.set("data-source", "cover_print.svg")
    root.set("data-cover-language", labels.get("language", "en"))
    # These are non-rendering Inkscape backups outside the cover's page, not
    # extra published cover content. The explicit live layer replaces them.
    remove_elements(root, UNUSED_TEXT_IDS)
    records: list[dict] = []
    flatten_embedded_svg(root, records)
    title = ET.Element(TAG("title"), {"id": "cover-accessible-title"})
    title.text = labels["labels"]["titleLine1"]["text"] + " — " + labels["labels"]["titleLine2"]["text"]
    description = ET.Element(TAG("desc"), {"id": "cover-accessible-description"})
    description.text = labels.get("description", "Original cover artwork by Jencel Panic, adapted as native SVG with a separate localizable title and author layer.")
    root.insert(0, description)
    root.insert(0, title)
    for element in root.iter():
        key = OUTLINE_IDS.get(element.get("id"))
        if key:
            element.set("data-role", "original-outlined-label")
            element.set("data-label-key", key)
            if labels["renderMode"] == "text":
                element.set("style", element.get("style", "") + ";display:none")
    root.append(text_layer(labels, labels["renderMode"] == "text"))
    embed_fonts(root, labels)
    if list(root.iter(TAG("image"))):
        raise ValueError("Cover still contains an image element after vector flattening.")
    ids = [element.get("id") for element in root.iter() if element.get("id")]
    if len(ids) != len(set(ids)):
        raise ValueError("Flattened cover contains duplicate SVG IDs.")
    return root, records


def prepare(labels_path: Path, output: Path | None = None) -> dict:
    source = REPO / "cover_print.svg"
    labels = json.loads(labels_path.read_text(encoding="utf-8"))
    root, records = build_cover_tree(labels)
    target = output or ASSETS / f"cover.{labels.get('language', 'en')}.svg"
    save_svg(target, root)
    language = labels.get("language", "en")
    if language == "en":
        art = copy.deepcopy(root)
        remove_elements(art, set(OUTLINE_IDS) | {"cover-localizable-labels", "cover-accessible-title"})
        art.set("id", "category-theory-illustrated-cover-art")
        art.set("aria-labelledby", "cover-accessible-description")
        save_svg(ASSETS / "cover-art.svg", art)
    elif not (ASSETS / "cover-art.svg").exists():
        raise ValueError("Prepare the shared English artwork before a localized cover.")
    font_metadata = root.find(TAG("metadata") + "[@id='cover-font-provenance']")
    fonts = json.loads(font_metadata.text) if font_metadata is not None else {"files": {}, "licenses": {}}
    for package, notice in fonts["licenses"].items():
        license_path = ASSETS / "licenses" / f"{package}-OFL.txt"
        license_path.parent.mkdir(parents=True, exist_ok=True)
        license_path.write_text(notice, encoding="utf-8", newline="\n")
    provenance = {
        "source": "cover_print.svg", "sourceSha256": sha256(source),
        "sourceCanonicalSha256": canonical_text_sha256(source),
        "sourcePng": "cover_print.png", "sourcePngSha256": sha256(REPO / "cover_print.png"),
        "viewBox": root.get("viewBox"), "sizeMm": [210, 297],
        "background": "#f2f2f2", "renderMode": labels["renderMode"],
        "output": target.name, "outputSha256": sha256(target),
        "outputCanonicalSha256": canonical_text_sha256(target),
        "artOutput": "cover-art.svg", "artOutputSha256": sha256(ASSETS / "cover-art.svg"),
        "artOutputCanonicalSha256": canonical_text_sha256(ASSETS / "cover-art.svg"),
        "embeddedVectorDiagramsFlattened": len(records),
        "rasterImages": 0, "externalImages": 0,
        "nativePathCount": sum(element.tag == TAG("path") for element in root.iter()),
        "outlinedLabelIds": OUTLINE_IDS,
        "liveTextLayerId": "cover-localizable-labels", "labelsFile": labels_path.name,
        "labelsCanonicalSha256": canonical_text_sha256(labels_path),
        "embeddedFontFiles": fonts["files"],
        "fontLicenseFiles": [f"licenses/{package}-OFL.txt" for package in fonts["licenses"]],
        "diagrams": records,
        "notes": [
            "Collage positions, scaling, rotations, SVG viewBoxes, colors and background retained; English outlines are retained in the SVG but hidden in text mode.",
            "Only embedded SVG image wrappers were replaced by native nested SVG viewports with prefixed IDs.",
            "Eight embedded SVGs without viewBoxes receive explicit viewBoxes matching their original intrinsic dimensions before scaling.",
            "No Mell fonts bundled; original English visible lettering is vector paths.",
            "The editable Unicode text layer is activated by renderMode=text for localized covers.",
            "Canonical text hashes use UTF-8 with LF newlines; raw hashes are retained only for exact local provenance.",
        ],
    }
    provenance_name = "provenance.json" if language == "en" else f"provenance.{language}.json"
    (ASSETS / provenance_name).write_text(json.dumps(provenance, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(json.dumps({key: provenance[key] for key in ("output", "embeddedVectorDiagramsFlattened", "rasterImages", "nativePathCount", "renderMode")}), flush=True)
    return provenance


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--labels", type=Path, default=ASSETS / "labels.en.json")
    parser.add_argument("--output", type=Path, help="Override the cover SVG output path.")
    args = parser.parse_args()
    prepare(args.labels, args.output)


if __name__ == "__main__":
    main()
