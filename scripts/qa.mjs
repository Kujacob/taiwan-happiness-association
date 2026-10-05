import fs from 'fs';
import path from 'path';
const root = process.cwd();
const files = [];
function walk(dir){ for(const e of fs.readdirSync(dir,{withFileTypes:true})){ const p=path.join(dir,e.name); if(e.isDirectory() && !['node_modules','.next','out','.git'].includes(e.name)) walk(p); else if(e.isFile()) files.push(p); } }
walk(root);
const text = files.filter(f=>/\.(js|mjs|md|json)$/.test(f)).map(f=>fs.readFileSync(f,'utf8')).join('\n');
const checks = [
 ['Official Chinese name', text.includes('社團法人台灣雀樂協會')],
 ['Official English name', text.includes('TAIWAN HAPPINESS ASSOCIATION')],
 ['Public email', text.includes('twnhpy@gmail.com')],
 ['Public phone', text.includes('+886-2-7749-1702')],
 ['Bilingual routes', fs.existsSync(path.join(root,'app/en/page.js'))],
 ['Health update date', text.includes('2026-10-05')],
 ['WHO/UNODC treatment source', text.includes('International Standards for the Treatment of Drug Use Disorders')],
 ['HRI source', text.includes('hri.global/what-is-harm-reduction')],
 ['No public member registration route', !fs.existsSync(path.join(root,'app/register'))],
 ['No history timeline route in release', !fs.existsSync(path.join(root,'app/activities')) && !fs.existsSync(path.join(root,'app/en/activities'))],
 ['Static export enabled', fs.readFileSync(path.join(root,'next.config.mjs'),'utf8').includes("output: 'export'")],
 ['GitHub Pages workflow', fs.existsSync(path.join(root,'.github/workflows/deploy-pages.yml'))],
 ['Vercel config', fs.existsSync(path.join(root,'vercel.json'))]
];
let failed=0;
for(const [name,ok] of checks){ console.log(`${ok?'PASS':'FAIL'} ${name}`); if(!ok) failed++; }
if(failed){ console.error(`\n${failed} QA checks failed.`); process.exit(1); }
console.log(`\nAll ${checks.length} QA checks passed.`);
