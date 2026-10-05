import Image from 'next/image';
import SiteShell from '../../components/SiteShell';
import {programAreas} from '../../data/content';
export const metadata={title:'方案與服務'};
const immigrantGallery=[
 ['/images/programs/new-immigrant-parent.webp','新住民家長親職教育課程'],
 ['/images/programs/new-immigrant-training.webp','2024 年新住民服務活動人員訓練'],
 ['/images/programs/new-immigrant-case.webp','2025 年新住民協助個案討論會議'],
 ['/images/programs/new-immigrant-career.webp','2026 年新住民職涯座談會']
];
export default function Page(){return <SiteShell><section><div className="container"><div className="breadcrumb">首頁 / 方案與服務</div><div className="page-intro"><div className="eyebrow">Programs & Services</div><h1>從健康教育到社會復歸</h1><p className="lead">雀樂歷年的工作橫跨成癮健康、青少年、家庭、新住民、減害研究與專業交流。以下以公開網站適合的方式整理，不揭露個案身分與敏感資料。</p></div><div className="cards cards-2">{programAreas.map(p=><div className="card" key={p.title}><div className="kicker">{p.en}</div><h3>{p.title}</h3><p>{p.text}</p></div>)}</div></div></section><section className="section-soft"><div className="container"><div className="section-head"><div><div className="eyebrow">Gender-responsive recovery</div><h2>女性藥物施用者社會復歸支持</h2></div><p>2021–2022 年衛福部計畫資料顯示，雀樂以個案管理為核心，結合健康教育、諮詢輔導、心理治療、醫療與司法轉介、職涯與親職等資源，發展性別友善的社區復健模式。</p></div><div className="cards"><div className="card"><h3>個案評估與管理</h3><p>從成癮問題、心理健康、生活狀態、家庭與社區支持系統進行需求評估，依優先順序共同擬定處遇計畫。</p></div><div className="card"><h3>跨網絡整合</h3><p>串聯醫療、司法、心理、社福、就業與親職資源，降低服務斷裂並支持復元與社會生活重建。</p></div><div className="card"><h3>性別與創傷知情</h3><p>重視女性在創傷、親密關係、照顧責任與社會角色上的特殊需求，不以單一戒斷成果定義復元。</p></div></div></div></section><section><div className="container"><div className="section-head"><div><div className="eyebrow">New immigrant families</div><h2>新住民與家庭支持</h2></div><p>協會資料顯示，歷年持續關注新住民家庭適應、子女早療、家長親職教育與服務人員培力；近年素材亦包含個案討論與職涯座談。</p></div><div className="photo-grid">{immigrantGallery.map(([src,cap])=><figure key={src}><Image src={src} width={900} height={675} alt={cap}/><figcaption>{cap}</figcaption></figure>)}</div><div className="meta">照片由協會本次提供之網站素材整理。涉及服務對象之活動照片僅作方案紀錄展示，不搭配可識別個案資訊。</div></div></section></SiteShell>}
