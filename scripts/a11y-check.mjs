import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve('out');
if (!fs.existsSync(root)) {
  console.error('FAIL Static output directory ./out not found. Run npm run build first.');
  process.exit(1);
}

const htmlFiles = [];
function walk(dir) {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    const stat = fs.statSync(p);
    if (stat.isDirectory()) walk(p);
    else if (p.endsWith('.html')) htmlFiles.push(p);
  }
}
walk(root);

let failures = 0;
for (const file of htmlFiles) {
  const html = fs.readFileSync(file, 'utf8');
  const rel = path.relative(root, file);
  const checks = [
    ['document language', /<html[^>]*\blang=["'][^"']+["']/i],
    ['viewport meta', /<meta[^>]*name=["']viewport["'][^>]*>/i],
  ];
  for (const [label, re] of checks) {
    if (!re.test(html)) {
      console.error(`FAIL ${rel}: missing ${label}`);
      failures++;
    }
  }

  for (const match of html.matchAll(/<img\b[^>]*>/gi)) {
    if (!/\balt=["'][^"']*["']/i.test(match[0])) {
      console.error(`FAIL ${rel}: image without alt attribute`);
      failures++;
    }
  }
  for (const match of html.matchAll(/<iframe\b[^>]*>/gi)) {
    if (!/\btitle=["'][^"']+["']/i.test(match[0])) {
      console.error(`FAIL ${rel}: iframe without title`);
      failures++;
    }
  }
  for (const match of html.matchAll(/<a\b[^>]*target=["']_blank["'][^>]*>/gi)) {
    if (!/\brel=["'][^"']*noreferrer[^"']*["']/i.test(match[0])) {
      console.error(`FAIL ${rel}: target=_blank link missing rel=noreferrer`);
      failures++;
    }
  }
}

if (failures) {
  console.error(`\nAccessibility preflight failed with ${failures} issue(s).`);
  process.exit(1);
}
console.log(`PASS Accessibility preflight: ${htmlFiles.length} HTML pages checked.`);
console.log('Note: automated checks do not constitute a WCAG 2.2 conformance certification; manual review is still required.');
