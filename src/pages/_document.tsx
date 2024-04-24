import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <link rel="stylesheet" href="/_next/static/style.css" /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-80CBVG6JYD"
        />
        <Script id="gtag-config" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-80CBVG6JYD');
          `}
        </Script>
      </body>
    </Html>
  );
}
