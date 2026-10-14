// Independent translation coverage and source-to-HTML conversion checks.
import fs from 'node:fs';
import MarkdownIt from 'markdown-it';
import {chromium} from 'playwright';
const md = new MarkdownIt({html:true});
const report = JSON.parse(fs.readFileSync('output/build-report-vi-book.json','utf8'));
const norm = t => t.replace(/\r\n/g,'\n');
const project = t => norm(t).replace(/^---\n[\s\S]*?\n---\n/,'').replace(/\{%[\s\S]*?%\}/g,'').replace(/<!--[\s\S]*?-->/g,'');
const repair = t => t.replaceAll('&mdash,','&mdash;').replaceAll('$Z₃$','$Z_{3}$').replace('$$A ∧ B$','$A ∧ B$').replace('100$ check','100&#36; check').replace(/\*\*((?:Task|Bài tập) \d+:)[ \t]+\*\*(?=\S)/g,'**$1** ').replace(/<div style="page-break-after: always; opacity: 0 ; height: 400px">\s*\\pagebreak\s*<\/div>/g,'').replace(/^(\|[^\n]+\|)[ \t]*\n(\|[ :|-]+\|)[ \t]*\n/gm,(whole,h,s)=>h.split('|').length===s.split('|').length?whole:`${h}\n|${Array(h.split('|').length-2).fill(' --- ').join('|')}|\n`);
const array = (t,re) => [...t.matchAll(re)].map(m=>m[0]);
const math = t => array(t.replace(/```[^\n]*\n[\s\S]*?```/g,'').replace(/`[^`]*`/g,''),/\$\$[\s\S]*?\$\$|\$[^$\n]*?\$/g);
const expected = report.chapters.map(c=>{
 const original=repair(project(fs.readFileSync('../'+c.file,'utf8')));
 const translated=repair(project(fs.readFileSync(c.translationFile,'utf8')));
 const eq=(a,b)=>JSON.stringify(a)===JSON.stringify(b);
 const headings=t=>md.parse(t,{}).filter(x=>x.type==='heading_open').map(x=>x.tag);
 const images=t=>[...t.matchAll(/!\[([\s\S]*?)\]\(([^)]+)\)/g)].map(m=>({file:'_chapters/'+m[2].replace(/^\.\.\//,''),caption:m[1]}));
 const prose=t=>t.replace(/!\[[\s\S]*?\]\([^)]*\)/g,' ').replace(/\$\$[\s\S]*?\$\$|\$[^$\n]*?\$/g,' ').replace(/^[ \t]*\{:\s*\.?[\w-]+\s*\}[ \t]*\n/gm,'');
 return {file:c.file,html:md.render(prose(translated)),images:images(translated),formulas:math(translated).map(x=>({display:x.startsWith('$$'),tex:x.slice(x.startsWith('$$')?2:1,x.startsWith('$$')?-2:-1)})),
 invariants:{headingLevels: eq(headings(original),headings(translated)),math: eq(math(original),math(translated)),images: eq(images(original).map(x=>x.file),images(translated).map(x=>x.file)),fencedCode:eq(array(original,/```[^\n]*\n[\s\S]*?```/g),array(translated,/```[^\n]*\n[\s\S]*?```/g)),inlineCode:eq(array(original.replace(/```[^\n]*\n[\s\S]*?```/g,''),/`[^`]*`/g),array(translated.replace(/```[^\n]*\n[\s\S]*?```/g,''),/`[^`]*`/g))}};
});
const executablePath=['C:/Program Files/Google/Chrome/Application/chrome.exe','/usr/bin/chromium'].find(p=>fs.existsSync(p));
const browser=await chromium.launch({headless:true,executablePath});
try{
 const page=await browser.newPage();
 await page.setContent(fs.readFileSync('output/book-vi-book.html','utf8').replace(/<script[\s\S]*?<\/script>/g,'').replace(/<link[^>]*>/g,''));
 const html=await page.evaluate(expected=>{
  const norm=s=>s.normalize('NFC').replace(/\s+/g,' ').trim(), eq=(a,b)=>JSON.stringify(a)===JSON.stringify(b);
  const headings=[...document.querySelectorAll('.chapter h1,.chapter h2,.chapter h3,.chapter h4,.chapter h5,.chapter h6')].map(x=>({level:Number(x.tagName.slice(1)),title:norm(x.textContent)}));
  const chapters=expected.map(e=>{
   const original=document.querySelector(`[data-chapter="${e.file}"]`),actual=original.cloneNode(true),exp=document.createElement('div');exp.innerHTML=e.html;
   const imgs=[...original.querySelectorAll('figure')].map(x=>({file:x.dataset.source,caption:x.querySelector('svg').getAttribute('aria-label')}));
   const formulas=[...original.querySelectorAll('.math')].filter(x=>!x.closest('figcaption')).map(x=>({display:x.classList.contains('display-math'),tex:norm(x.textContent.slice(2,-2))}));
   actual.querySelectorAll('figure,.math,.chapter-navigation').forEach(x=>x.replaceWith(document.createTextNode(' ')));
   const a=norm(actual.textContent),b=norm(exp.textContent);let at=0;while(at<a.length&&a[at]===b[at])at++;
   return {file:e.file,invariants:e.invariants,proseMatch:a===b,mismatch:a===b?null:{at,expected:b.slice(at-60,at+160),actual:a.slice(at-60,at+160)},imageSequence:eq(imgs,e.images.map(x=>({...x,caption:norm(x.caption)}))),formulaSequence:eq(formulas,e.formulas.map(x=>({...x,tex:norm(x.tex)}))),codeMatch:eq([...actual.querySelectorAll('pre')].map(x=>x.textContent),[...exp.querySelectorAll('pre')].map(x=>x.textContent)),captionCount:imgs.length};
  });
  const toc=[...document.querySelectorAll('.contents a .toc-page')].map(x=>({id:x.dataset.target,page:Number(x.textContent)}));
  const pending=[...document.querySelectorAll('.contents .pending')];
  return {chapters,headings,toc,language:document.documentElement.lang,pendingCount:pending.length,pendingValid:pending.every(x=>!x.querySelector('a')&&x.querySelector('.toc-page').textContent==='-'),contentsCount:document.querySelectorAll('.contents li').length};
 },expected);
 console.log(JSON.stringify(html));
}finally{await browser.close()}
