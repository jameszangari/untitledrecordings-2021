import Head from 'next/head'
import Home from '@/templates/Home'
import index from '@/json/index'

export default function Index () {
  return (
    <>
      <Head>
        <title>{index.meta.title}</title>
        <link rel='icon' href={index.meta.image} />
        <meta property='og:title' content={index.meta.title} />
        <meta property='og:description' content={index.meta.description} />
        <meta name='keywords' content={index.meta.keywords} />
        <meta property='og:image' content={index.meta.image} />
        <meta name='twitter:card' content='summary_large_image' />
        {/* <script
          src='https://kit.fontawesome.com/080c06f1d6.js'
          crossorigin='anonymous'
        ></script> */}
        <link href="fontawesome/css/fontawesome.css" rel="stylesheet" />
        <link href="fontawesome/css/brands.css" rel="stylesheet" />
        <link href="fontawesome/css/solid.css" rel="stylesheet" />
        {/* <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css'
        />
        <link rel='stylesheet' href='https://use.typekit.net/yae4mky.css' />
        <link href="/fonts/fonts.css" rel="stylesheet"/> */}
      </Head>
      <Home />
    </>
  )
}
