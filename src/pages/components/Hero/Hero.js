import React from 'react'
import MediaQuery from 'react-responsive'
import styles from './Hero.module.scss'
import index from '@/json/index'

function Hero () {
  return (
    <section className="c-hero-front l-grid">
      <MediaQuery query='(min-width: 1024px)'>
        <h1 className='c-hero-front__logo c-hero-front__logo-full'>Untitled Recordings</h1>
      </MediaQuery>
      <MediaQuery query='(max-width: 1023px)'>
        <h1 className='c-hero-front__logo c-hero-front__logo-icon'>UR</h1>
      </MediaQuery>
      <div className='c-hero-front__border'></div>
      <div className='c-hero-front__group'>
        <p className='c-hero-front__info u-paragraph'>Untitled Recordings is a brand representing a collective group of artists in the greater Philadelphia area. We work with local musicians and provide them with  studio services such as recording, production, mixing, and mastering. Additionally, we have a team of designers and developers to bring your content to life.</p>
      </div>
    </section>
  )
}

export default Hero
