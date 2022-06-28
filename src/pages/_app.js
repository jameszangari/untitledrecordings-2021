import Head from "next/head";
import "@/styles/globals.css";
import index from "@/json/index";

function MyApp({ Component, pageProps }) {
  const seo = index.meta;
  return (
    <>
      <Head>
        {/* Recommended Meta Tags */}
        <meta charSet="utf-8" />
        <meta name="language" content="english" />
        <meta httpEquiv="content-type" content="text/html" />
        <meta name="author" content={seo.title} />
        <meta name="designer" content={seo.title} />
        <meta name="publisher" content={seo.title} />

        {/* Search Engine Optimization Meta Tags */}
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />
        <meta name="robots" content="index,follow" />
        <meta name="distribution" content="web" />
        {/* Facebook Open Graph meta tags
        documentation: https://developers.facebook.com/docs/sharing/opengraph */}
        <meta name="og:title" content={seo.title} />
        <meta name="og:type" content="site" />
        <meta name="og:url" content="https://untitledrecordings.net" />
        <meta name="og:image" content={seo.image} />
        <meta name="og:site_name" content={seo.title} />
        <meta name="og:description" content={seo.description} />
        <meta name="msapplication-TileColor" content="#003459" />
        <link rel="apple-touch-icon" href="/meta/apple-touch-icon.png" />
        <link
          rel="apple-touch-icon"
          sizes="16x16"
          href="/meta/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="32x32"
          href="/meta/favicon-32x32.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/meta/apple-touch-icon.png"
        />
        <link rel="manifest" href="/meta/site.webmanifest" />
        <link
          rel="mask-icon"
          color="#000000"
          href="/meta/safari-pinned-tab.svg"
        />
        <link rel="apple-touch-startup-image" href="/jamescliff-cover.jpg" />

        {/* Meta Tags for HTML pages on Mobile */}
        <meta
          name="viewport"
          content="width=device-width, minimum-scale=1, initial-scale=1.0"
        />
        <meta name="theme-color" content="#000000" />
        <link rel="shortcut icon" href="/meta/favicon.ico" />

        {/* Twitter Summary card
        documentation: https://dev.twitter.com/cards/getting-started
        Be sure validate your Twitter card markup on the documentation site. */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@untitledrecordings" />

        {/* <link rel="stylesheet" href="/fonts/fonts.css" /> */}
      </Head>
      <a href="#main" className="skip-to-content-link">
        Skip to main content
      </a>
      <main id="main" className="touch-none">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
