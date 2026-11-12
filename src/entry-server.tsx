import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom/server';
import {AppContent} from './App';
export function render(url:string){const context:any={};const html=renderToString(<StaticRouter location={url}><AppContent helmetContext={context}/></StaticRouter>);const h=context.helmet;return {html,head:h.title.toString()+h.meta.toString()+h.link.toString()+h.script.toString()};}
