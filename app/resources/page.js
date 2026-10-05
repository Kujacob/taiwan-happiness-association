import SiteShell from '../../components/SiteShell';
export const metadata={title:'專業資源'};
const refs=[
 ['WHO｜International Standards for the Treatment of Drug Use Disorders','https://www.who.int/publications/i/item/international-standards-for-the-treatment-of-drug-use-disorders'],
 ['WHO｜Improving prevention and treatment for drug use disorders','https://www.who.int/activities/improving-prevention-and-treatment-for-drug-use-disorders'],
 ['WHO｜Global status report on alcohol and health and treatment of substance use disorders','https://www.who.int/publications/i/item/9789240096745'],
 ['Harm Reduction International｜What is Harm Reduction?','https://hri.global/what-is-harm-reduction/'],
 ['臺師大成癮防制暨政策研究中心','https://www.cappr.ntnu.edu.tw/']
];
export default function Page(){return <SiteShell><section><div className="container prose"><div className="breadcrumb">首頁 / 專業資源</div><div className="eyebrow">Resources</div><h1>專業資源</h1><p className="lead">優先收錄具明確機構責任、可追溯更新日期與方法基礎的資料來源。</p><ul className="references">{refs.map(([n,h])=><li key={h}><a className="source-link" target="_blank" rel="noreferrer" href={h}>{n} ↗</a></li>)}</ul><h2>內容治理原則</h2><p>雀樂官網的衛教內容將保留「最後更新日期」與主要參考來源；涉及醫療處置、藥物、感染或法規之頁面，更新時優先檢查 WHO、台灣主管機關與相關專業指引。</p><div className="meta">最後更新：2026-10-01。</div></div></section></SiteShell>}
