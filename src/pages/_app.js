import Head from "next/head";
import "@/styles/globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import index from "@/json/index";
import { GoogleAnalytics } from "nextjs-google-analytics";

function MyApp({ Component, pageProps }) {
  const seo = index.meta;
  return (
    <>
      <GoogleAnalytics />
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
        {/* Meta Tags for HTML pages on Mobile */}
        <meta
          name="viewport"
          content="width=device-width, minimum-scale=1, initial-scale=1.0"
        />
        <meta name="theme-color" content="#000000" />
        {/* Twitter Summary card
        documentation: https://dev.twitter.com/cards/getting-started
        Be sure validate your Twitter card markup on the documentation site. */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@untitledrecordings" />
      </Head>
      <a href="#main" className="skip-to-content-link">
        Skip to main content
      </a>
      <Nav />
      <main id="main">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
