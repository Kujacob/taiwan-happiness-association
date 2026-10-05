import fs from 'node:fs';

const files = ['qa/lighthouse-home.json','qa/lighthouse-harm-reduction.json'];
let failed = false;
for (const file of files) {
  const report = JSON.parse(fs.readFileSync(file,'utf8'));
  const c = report.categories;
  const scores = {
    performance: Math.round((c.performance?.score ?? 0) * 100),
    accessibility: Math.round((c.accessibility?.score ?? 0) * 100),
    bestPractices: Math.round((c['best-practices']?.score ?? 0) * 100),
    seo: Math.round((c.seo?.score ?? 0) * 100),
  };
  console.log(file, scores);
  if (scores.accessibility < 90 || scores.seo < 90 || scores.bestPractices < 85) failed = true;
}
if (failed) {
  console.error('Lighthouse quality gate failed. Required: Accessibility >=90, SEO >=90, Best Practices >=85.');
  process.exit(1);
}
console.log('PASS Lighthouse quality gate. Performance is reported but not used as a hard CI gate because shared runners are noisy.');
