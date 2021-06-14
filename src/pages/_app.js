import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as ga from '@/lib/ga' // Google Analytics
import Header from '@/global/Header/Header'
import Footer from '@/global/Footer/Footer'
import '@/styles/globals.scss'

function MyApp ({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = url => {
      ga.pageview(url)
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <a href='#main' className='skip-to-content-link'>
        Skip to main content
      </a>
      <Header />
      <Component className='' {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
