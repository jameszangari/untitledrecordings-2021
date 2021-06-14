import React from 'react'

// import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas)

import Construction from '@/components/Construction/Construction'

export default function Home () {
  return (
    <>
      <main id='main'>
        <Construction />
      </main>
    </>
  )
}
