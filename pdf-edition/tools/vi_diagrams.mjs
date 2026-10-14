// Runs in the browser after Noto fonts load. Original geometry stays locked.
export function localizeDiagrams(labels) {
  const results = [];
  for (const figure of document.querySelectorAll('figure.diagram')) {
    const selected = labels.filter(label => label.file === figure.dataset.source);
    for (const label of selected) {
      const id = `${figure.id}-${label.id}`;
      const original = document.getElementById(id);
      if (!original || (original.getAttribute('aria-label') ?? original.textContent.trim()) !== label.source)
        throw new Error(`Missing or stale diagram label: ${id}`);
      const box = original.getBBox();
      if (!box.width || !box.height) throw new Error(`Empty diagram label: ${id}`);
      const style = getComputedStyle(original);
      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      text.textContent = label.text;
      text.setAttribute('style', `font-family:'Noto Sans';font-size:${style.fontSize};font-weight:${style.fontWeight};fill:${style.fill};stroke:none`);
      text.setAttribute('x', '0'); text.setAttribute('y', '0');
      // Keep original transforms by inserting the new text into the same group.
      const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      if (original.tagName.toLowerCase() === 'g') {
        for (const child of [...original.children]) child.setAttribute('display', 'none');
        original.appendChild(group);
      } else {
        for (const name of ['transform']) if (original.hasAttribute(name)) group.setAttribute(name, original.getAttribute(name));
        original.parentNode.insertBefore(group, original.nextSibling);
        original.setAttribute('display','none');
      }
      group.appendChild(text);
      const b = text.getBBox();
      const scale = Math.min(1, box.width / b.width, box.height / b.height);
      text.setAttribute('transform', `translate(${box.x+box.width/2},${box.y+box.height/2}) scale(${scale}) translate(${-b.x-b.width/2},${-b.y-b.height/2})`);
      group.setAttribute('aria-label',label.text);
      original.setAttribute('aria-label',label.text);
      results.push({figure:figure.id,file:label.file,id:label.id,source:label.source,text:label.text,scale});
    }
  }
  window.localizedDiagramLabels = results;
}
