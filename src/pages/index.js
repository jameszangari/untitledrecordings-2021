import Head from 'next/head'
import Home from '@/templates/Home'
import index from '@/json/index'

export default function Index () {
  return (
    <>
      <Head>
        <title>🚧 {index.meta.title} 🚧</title>
        <link rel='icon' href={index.meta.image} />
        <meta property='og:title' content={index.meta.title} />
        <meta property='og:description' content={index.meta.description} />
        <meta name='keywords' content={index.meta.keywords} />
        <meta property='og:image' content={index.meta.image} />
        <link href="fontawesome/css/fontawesome.css" rel="stylesheet" />
        <link href="fontawesome/css/brands.css" rel="stylesheet" />
        <link href="fontawesome/css/solid.css" rel="stylesheet" />
      </Head>
      <Home />
    </>
  )
}
