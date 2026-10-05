import './globals.css';
export const metadata = {
 title: {default:'社團法人台灣雀樂協會', template:'%s｜社團法人台灣雀樂協會'},
 description:'社團法人台灣雀樂協會：促進健康、支持復元，推動以實證、尊重與不污名為核心的成癮健康教育與減害。'
};
export default function RootLayout({children}) { return <html lang="zh-Hant"><body>{children}</body></html>; }
