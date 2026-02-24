import type { Metadata } from "next";
import Script from "next/script";
import { DM_Serif_Text, DM_Mono, Prata } from "next/font/google";
import "./globals.css";

const dmSerifText = DM_Serif_Text({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

const dmMono = DM_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-mono",
  display: "swap",
});

const prata = Prata({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-prata",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Awaken Korea | 어웨이큰",
  description:
    "지인에게 Awaken을 추천 받으셨나요? 말로는 다 설명되지 않는 4일간의 경험, 도대체 무엇이 사람을 변화시키는지 궁금하다면.",
  openGraph: {
    title: "Awaken Korea | 어웨이큰",
    description:
      "말로는 다 설명되지 않는 4일간의 경험, 도대체 무엇이 사람을 변화시키는지 궁금하다면.",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/images/awaken-kr-og.jpg",
        width: 1200,
        height: 630,
        alt: "Awaken 어웨이큰",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body
        className={`${dmSerifText.variable} ${dmMono.variable} ${prata.variable} antialiased`}
      >
        {children}
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1991556054974792');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1991556054974792&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}
