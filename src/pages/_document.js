import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="32x32" href="/favicon-32x32.png" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" color="#000000" href="/safari-pinned-tab.svg" />
        <link rel="apple-touch-startup-image" href="/jamescliff-cover.jpg" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
