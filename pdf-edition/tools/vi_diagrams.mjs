// Runs in the browser after Noto fonts load. Original geometry stays locked.
export function localizeDiagrams(labels) {
  const results = [];
  for (const figure of document.querySelectorAll('figure.diagram')) {
    const selected = labels.filter(label => label.file === figure.dataset.source);
    const svg = figure.querySelector('svg');
    const view = svg.viewBox.baseVal;
    const bounds = {left:view.x,top:view.y,right:view.x+(view.width || svg.width.baseVal.value),bottom:view.y+(view.height || svg.height.baseVal.value)};
    for (const label of selected) {
      const id = `${figure.id}-${label.id}`;
      const original = document.getElementById(id);
      if (!original || (original.getAttribute('aria-label') ?? original.textContent).replace(/\s+/g,' ').trim() !== label.source)
        throw new Error(`Missing or stale diagram label: ${id}`);
      const box = original.getBBox();
      if (!box.width || !box.height) throw new Error(`Empty diagram label: ${id}`);
      const style = getComputedStyle(original);
      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      if (label.lines) {
        label.lines.forEach((line, i) => {
          const span = document.createElementNS('http://www.w3.org/2000/svg','tspan');
          span.textContent = line; span.setAttribute('x','0'); span.setAttribute('y',String(i*parseFloat(style.fontSize)*1.1));
          text.appendChild(span);
        });
      } else text.textContent = label.text;
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
      const matrix = svg.getCTM().inverse().multiply(text.getCTM());
      for (const [x,y] of [[b.x,b.y],[b.x+b.width,b.y],[b.x,b.y+b.height],[b.x+b.width,b.y+b.height]]) {
        const point = new DOMPoint(x,y).matrixTransform(matrix);
        bounds.left=Math.min(bounds.left,point.x);bounds.right=Math.max(bounds.right,point.x);
        bounds.top=Math.min(bounds.top,point.y);bounds.bottom=Math.max(bounds.bottom,point.y);
      }
      results.push({figure:figure.id,file:label.file,id:label.id,source:label.source,text:label.text,scale});
    }
    if (selected.length) {
      const margin = 2;
      svg.setAttribute('viewBox',`${bounds.left-margin} ${bounds.top-margin} ${bounds.right-bounds.left+2*margin} ${bounds.bottom-bounds.top+2*margin}`);
    }
  }
  window.localizedDiagramLabels = results;
}
