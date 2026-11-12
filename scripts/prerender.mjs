import {readFile,writeFile,mkdir} from 'node:fs/promises';
import {render} from '../.ssr/entry-server.js';
const template=await readFile('dist/index.html','utf8');
const sitemap=await readFile('public/sitemap.xml','utf8');
const paths=[...new Set(['/', '/faq','/mapa-do-site',...Array.from(sitemap.matchAll(/<loc>(.*?)<\/loc>/g),m=>decodeURI(new URL(m[1]).pathname))])];
for(const path of paths){const {html,head}=render(path);let page=template.replace('<!--seo-head-->',head).replace(/<div id="root">[\s\S]*?<script type="module"/,`<div id="root">${html}</div><script type="module"`);if(!page.includes(html)) {const start=page.indexOf('<div id="root">');const end=page.indexOf('    <!-- Do not register');page=page.slice(0,start)+`<div id="root">${html}</div>\n`+page.slice(end);}const dir='dist'+(path==='/'?'':path);await mkdir(dir,{recursive:true});await writeFile(dir+'/index.html',page);}
console.log(`Rendered ${paths.length} routes with unique metadata and visible HTML.`);

const notFound=render('/pagina-inexistente');await writeFile('dist/404.html',template.replace('<!--seo-head-->','<title>Página não encontrada | Sul Toldos</title><meta name="robots" content="noindex"/>').replace(/<div id="root">[\s\S]*?<\/div>\s*<!-- Do not register/,`<div id="root">${notFound.html}</div><!-- Do not register`));
