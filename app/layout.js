import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://taiwan-happiness-association.org';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#18352f',
  colorScheme: 'light',
};

export const metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: '社團法人台灣雀樂協會',
  title: {
    default: '社團法人台灣雀樂協會｜健康促進・復元支持・減害',
    template: '%s｜社團法人台灣雀樂協會',
  },
  description: '社團法人台灣雀樂協會以健康促進為核心，推動成癮健康教育、復元支持、減害與公共衛生，提供中英雙語、實證導向且不污名的健康資訊。',
  keywords: ['台灣雀樂協會','成癮','物質使用疾患','復元','減害','健康促進','harm reduction','addiction recovery','Taiwan Happiness Association'],
  authors: [{name:'社團法人台灣雀樂協會'}],
  creator: '社團法人台灣雀樂協會',
  publisher: '社團法人台灣雀樂協會',
  category: 'health',
  icons: {
    icon: '/images/logo.jpg',
    apple: '/images/logo.jpg',
  },
  openGraph: {
    type: 'website',
    locale: 'zh_TW',
    alternateLocale: ['en_US'],
    url: siteUrl,
    siteName: '社團法人台灣雀樂協會',
    title: '社團法人台灣雀樂協會｜健康促進・復元支持・減害',
    description: '以實證、尊嚴與不污名為核心，推動成癮健康教育、復元支持與減害。',
    images: [{
      url: '/images/logo-with-name.webp',
      width: 800,
      height: 500,
      alt: '社團法人台灣雀樂協會 Taiwan Happiness Association',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '社團法人台灣雀樂協會｜健康促進・復元支持・減害',
    description: '以實證、尊嚴與不污名為核心，推動成癮健康教育、復元支持與減害。',
    images: ['/images/logo-with-name.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export default function RootLayout({children}) {
  return <html lang="zh-Hant"><body>{children}</body></html>;
}
