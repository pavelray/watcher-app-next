import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0&display=optional"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script
          id="google-ads"
          strategy="afterInteractive"
          onError={(e) => {
            console.error("Adsense Script failed to load", e);
          }}
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4497828949688741"
          crossOrigin="anonymous"
        />
        <Script
          src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"
          async
        />
      </body>
    </Html>
  );
}
