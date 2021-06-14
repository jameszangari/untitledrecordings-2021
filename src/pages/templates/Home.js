import React from 'react'

// import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas)

import Hero from '@/components/Hero/Hero'
import Artists from '@/components/Artists/Artists'
import Music from '@/components/Music/Music'
import Landing from '@/components/Landing/Landing'

export default function Home () {
  return (
    <>
      <main id='main'>
        <Landing />
        <Hero />
        <Artists />
        <Music />
      </main>
    </>
  )
}
