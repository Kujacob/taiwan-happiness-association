'use client';

import Image from 'next/image';
import Link from 'next/link';
import {useEffect, useMemo, useState} from 'react';

const zhSlides = [
  {
    src:'/images/illustrations/hero-home.svg',
    alt:'台灣社區健康、復元與支持的原創插畫',
    title:'每個人，都有權利過平凡而快樂的生活。',
    eyebrow:'雀樂協會的核心信念',
    href:'/about',
    priority:true
  },
  {
    src:'/images/events/2024-apac-group.webp',
    alt:'2024亞太減少傷害國際專家論壇與研討會大會合影',
    title:'亞太減少傷害國際專家論壇與研討會',
    eyebrow:'專業交流 · Harm Reduction',
    href:'/programs'
  },
  {
    src:'/images/events/2024-apac-opening.webp',
    alt:'2024亞太減少傷害國際專家論壇與研討會活動現場',
    title:'連結政策、研究與第一線實務',
    eyebrow:'國際交流 · Public Health',
    href:'/programs'
  },
  {
    src:'/images/events/school-prevention-1.webp',
    alt:'校園物質使用預防教育活動現場',
    title:'青少年與校園物質使用預防',
    eyebrow:'健康教育 · Youth Prevention',
    href:'/programs'
  },
  {
    src:'/images/programs/new-immigrant-parent.webp',
    alt:'新住民家庭親職教育活動',
    title:'新住民與家庭支持',
    eyebrow:'家庭支持 · Community Support',
    href:'/programs'
  }
];

const enSlides = [
  {
    src:'/images/illustrations/hero-home.svg',
    alt:'Original illustration about community health, recovery and support',
    title:'Everyone deserves an ordinary, joyful life.',
    eyebrow:'Our core belief',
    href:'/en/about',
    priority:true
  },
  {
    src:'/images/events/2024-apac-group.webp',
    alt:'Group photo from the 2024 Asia-Pacific Harm Reduction International Expert Forum and Conference',
    title:'Asia-Pacific Harm Reduction International Expert Forum & Conference',
    eyebrow:'Professional exchange · Harm Reduction',
    href:'/en/programs'
  },
  {
    src:'/images/events/2024-apac-opening.webp',
    alt:'Opening session of the 2024 Asia-Pacific Harm Reduction conference',
    title:'Connecting policy, research and frontline practice',
    eyebrow:'International exchange · Public Health',
    href:'/en/programs'
  },
  {
    src:'/images/events/school-prevention-1.webp',
    alt:'School-based substance-use prevention activity',
    title:'Youth and school-based prevention',
    eyebrow:'Health education · Youth Prevention',
    href:'/en/programs'
  },
  {
    src:'/images/programs/new-immigrant-parent.webp',
    alt:'Parent education activity for new immigrant families',
    title:'New immigrant and family support',
    eyebrow:'Family support · Community Support',
    href:'/en/programs'
  }
];

export default function HeroCarousel({lang='zh'}) {
  const slides = useMemo(()=> lang === 'en' ? enSlides : zhSlides,[lang]);
  const [index,setIndex] = useState(0);
  const [paused,setPaused] = useState(false);
  const [reduced,setReduced] = useState(false);

  useEffect(()=>{
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = ()=>setReduced(mq.matches);
    sync();
    mq.addEventListener?.('change',sync);
    return ()=>mq.removeEventListener?.('change',sync);
  },[]);

  useEffect(()=>{
    if (paused || reduced) return;
    const timer = window.setInterval(()=>setIndex(i=>(i+1)%slides.length),6000);
    return ()=>window.clearInterval(timer);
  },[paused,reduced,slides.length]);

  const go = (next)=>setIndex((next+slides.length)%slides.length);
  const current = slides[index];

  return <div
    className="hero-carousel"
    role="region"
    aria-roledescription="carousel"
    aria-label={lang==='en'?'Association highlights':'協會重點活動'}
    onMouseEnter={()=>setPaused(true)}
    onMouseLeave={()=>setPaused(false)}
    onFocusCapture={()=>setPaused(true)}
    onBlurCapture={()=>setPaused(false)}
  >
    <div className="hero-carousel-stage">
      {slides.map((slide,i)=><div
        key={slide.src}
        className={'hero-carousel-slide '+(i===index?'is-active':'')}
        aria-hidden={i!==index}
      >
        <Image
          className="hero-carousel-image"
          src={slide.src}
          width={1199}
          height={675}
          alt={i===index?slide.alt:''}
          priority={Boolean(slide.priority)}
          sizes="(max-width: 980px) 100vw, 46vw"
        />
      </div>)}
      <div className="hero-carousel-caption">
        <span>{current.eyebrow}</span>
        <strong>{current.title}</strong>
        <Link href={current.href}>{lang==='en'?'Learn more':'了解更多'} →</Link>
      </div>
      <button className="hero-carousel-arrow prev" type="button" onClick={()=>go(index-1)} aria-label={lang==='en'?'Previous slide':'上一張'}>‹</button>
      <button className="hero-carousel-arrow next" type="button" onClick={()=>go(index+1)} aria-label={lang==='en'?'Next slide':'下一張'}>›</button>
    </div>
    <div className="hero-carousel-controls" aria-label={lang==='en'?'Choose slide':'切換照片'}>
      {slides.map((slide,i)=><button
        key={slide.src}
        type="button"
        className={i===index?'is-active':''}
        onClick={()=>setIndex(i)}
        aria-label={lang==='en'?'Show slide '+(i+1):'顯示第 '+(i+1)+' 張'}
        aria-current={i===index?'true':undefined}
      />)}
    </div>
  </div>;
}
