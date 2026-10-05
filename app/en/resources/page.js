import SiteShell from '../../../components/SiteShell';
export const metadata={title:'Resources'};
const refs=[
 ['WHO / UNODC — International Standards for the Treatment of Drug Use Disorders','https://www.who.int/publications/i/item/international-standards-for-the-treatment-of-drug-use-disorders'],
 ['WHO — Improving prevention and treatment for drug use disorders','https://www.who.int/activities/improving-prevention-and-treatment-for-drug-use-disorders'],
 ['WHO — Global status report on alcohol and health and treatment of substance use disorders','https://www.who.int/publications/i/item/9789240096745'],
 ['Harm Reduction International — What is Harm Reduction?','https://hri.global/what-is-harm-reduction/']
];
export default function Page(){return <SiteShell lang="en"><section><div className="container prose"><div className="breadcrumb">Home / Resources</div><div className="eyebrow">Resources</div><h1>Professional resources</h1><p className="lead">We prioritize sources with clear institutional responsibility, traceable update dates and transparent evidence foundations.</p><ul className="references">{refs.map(([n,h])=><li key={h}><a className="source-link" target="_blank" rel="noreferrer" href={h}>{n} ↗</a></li>)}</ul><div className="meta">Last updated: 2026-10-01.</div></div></section></SiteShell>}
