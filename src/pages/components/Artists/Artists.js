import React, { useState } from 'react'
import index from '@/json/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Artists () {
  const artists = index.artists
  const [toggle, setToggle] = useState(false)
  const disableScroll = () => {
    document.querySelectorAll('html').forEach(node => {
      node.classList.add('is-open')
    })
  }

  const enableScroll = () => {
    document.querySelectorAll('html').forEach(node => {
      node.classList.remove('is-open')
    })
  }
  function toggleModalState (e) {
    setToggle(toggle => {
      const newState = !toggle

      if (newState) {
        disableScroll()
      } else {
        enableScroll()
      }

      return newState
    })
  }
  const renderLinks = (socials) => {
    if (socials.length <= 1) {
      return
    } else {
      return (
        <div>
          {socials.map((social, i) => (
            <a 
              key={i}
              href={social.url}
              className="c-hero-artist__socials-link"
            >
              <FontAwesomeIcon icon={[`${social.style}`, `${social.label}`]} className={social.style + '-' + social.label + '--hover'}/>
            </a>
          ))}
        </div>
      )
    }
  }
  return (
    <section className='c-artists-row'>
      <h1 className='c-artists-row__heading u-heading-2 u-align-center'>
        Our Artists
      </h1>
      <div className='c-artists-row__group'>
        {artists.map((artist, i) => (
          <section className='c-artist-block' key={i}>
            <div
              className='c-artist-block__image'
              style={{ backgroundImage: `url(${artist.image})` }}
            >
              <span className='c-artist-block__content'>
                <h3 className='c-artist-block__heading'>{artist.name}</h3>
                <div className='c-artist-block__heading--border'></div>
                <button
                  className='c-artist-block__link o-button-secondary o-button-secondary--small'
                  onClick={toggleModalState}
                >
                  View Artist
                </button>
              </span>
              <div className='c-artist-block__overlay'></div>
            </div>
            <div className='c-artist-block__bg'></div>
          </section>
        ))}
      </div>
      {toggle && (
      <section data-module="hero" className="c-hero-artist c-artist-modal u-text-align-center">
      {artists.map((artist, i) => (
        <div key={i}>
        <button
          className='c-music-modal__button'
          onClick={toggleModalState}
        ></button>
        <div className="l-grid">
          <h1 className="c-hero-artist__heading u-heading-1">{artist.name}</h1>
          <div className="c-hero-artist__border-bottom"></div>		
        </div>
        <div className="c-hero-artist__artist l-grid">
          <div className="c-hero-artist__image-group">
            <img
              className="lozad c-hero-artist__image"
              src={artist.image}
              data-placeholder-background="black"
              alt={artist.name + " portrait"}
            />
          </div>
          <div className="c-hero-artist__artist--info">
            <p className="c-hero-artist__artist--info-bio u-paragraph"></p>
            <div className="c-hero-artist__socials">
              {renderLinks(artist.socials)}
            </div>
            <div className="c-hero-artist__tags">Roles:
                <a href="">
                  <span className="c-hero-artist__tag"></span>
                </a>
            </div>
        </div>
      </div>
      </div>
      ))}
    </section>
      )}
    </section>
  )
}

export default Artists
