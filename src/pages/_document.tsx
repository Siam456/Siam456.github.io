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
        {/* <Script
          src="https://cdn.jsdelivr.net/gh/brainstationrandd/chatbot-widget-v2@main/script-v7.js"
          strategy="beforeInteractive"
        /> */}
        <Script
          src="http://localhost:3001/widgets/script-backup.js"
          strategy="beforeInteractive"
          chatbot_id="54"
          bubbleBorder="false"
          bubbleAlignment="vertical"
          voice="true"
          feedback="false"
          headerColor="white"
          headerColorShade="0"
          buddleColor="white"
          buddleColorShade="0"
          textColor="black"
          textColorShade="700"
          chatHistory="false"
          defer
        />
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
