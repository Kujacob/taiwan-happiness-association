import Image from 'next/image';
import Link from 'next/link';
import {organization} from '../data/content';

const zhNav = [['關於雀樂','/about'],['方案與服務','/programs'],['健康知識','/knowledge'],['減害','/harm-reduction'],['專業資源','/resources'],['聯絡我們','/contact']];
const enNav = [['About','/en/about'],['Programs','/en/programs'],['Knowledge','/en/knowledge'],['Harm reduction','/en/harm-reduction'],['Resources','/en/resources'],['Contact','/en/contact']];

export default function SiteShell({children, lang='zh'}) {
 const en = lang === 'en';
 const nav = en ? enNav : zhNav;
 const home = en ? '/en' : '/';
 return <>
  <a className="skip" href="#main">{en?'Skip to content':'跳至主要內容'}</a>
  <header className="site-header">
   <div className="container navbar">
    <Link className="brand" href={home} aria-label={en?'Taiwan Happiness Association home':'社團法人台灣雀樂協會首頁'}>
      <Image src="/images/logo.jpg" width={96} height={96} alt={en?'Taiwan Happiness Association logo':'台灣雀樂協會 Logo'} priority />
      <span>{en?'TAIWAN HAPPINESS ASSOCIATION':organization.nameZh}<small>{en?'Health · Recovery · Harm Reduction':'健康・復元・減害'}</small></span>
    </Link>
    <nav className="navlinks" aria-label={en?'Main navigation':'主要導覽'}>{nav.map(([n,h])=><Link key={h} href={h}>{n}</Link>)}</nav>
    <Link className="lang" href={en?'/':'/en'}>{en?'中文':'EN'}</Link>
    <details className="mobile-menu"><summary>{en?'Menu':'選單'}</summary><nav aria-label={en?'Mobile navigation':'行動版導覽'}>{nav.map(([n,h])=><Link key={h} href={h}>{n}</Link>)}</nav></details>
   </div>
  </header>
  <main id="main">{children}</main>
  <footer className="footer"><div className="container">
   <div className="footer-grid">
    <div><div className="footer-brand"><Image src="/images/logo.jpg" width={128} height={128} alt=""/><div><strong>{en?organization.nameEn:organization.nameZh}</strong><p>{en?'Evidence-informed health promotion, recovery support and harm reduction.':'以實證為基礎，促進健康、支持復元、推動減害。'}</p></div></div></div>
    <div><div className="footer-links">{nav.map(([n,h])=><Link key={h} href={h}>{n}</Link>)}<a href="/docs/registration-certificate.pdf">{en?'Registration certificate':'立案證書'}</a></div><div className="footer-contact"><a href={`mailto:${organization.email}`}>{organization.email}</a><a href={organization.phoneHref}>{organization.phoneDisplay}</a><span>{en?organization.addressEn:organization.addressZh}</span></div></div>
   </div>
   <div className="copyright">© {new Date().getFullYear()} {en?organization.nameEn:organization.nameZh} · {en?'Last site review: 2026-10-05':'網站內容檢視：2026-10-05'}</div>
  </div></footer>
 </>
}
