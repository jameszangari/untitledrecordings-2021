import React, { useState } from 'react'
import music from '@/json/music'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Music () {
  const collection = music.collection
  const [toggle, setToggle] = useState(false)
  const renderArtists = (artists) => {
    if (artists.length < 1) {
      return
    } else {
      return (
          <p className='c-music-modal__tags'>
            UR Artist(s):
            {artists.map((artist, i) => (
            <a
              key={i}
              href={artists.url}
            >
              {i > 0 && ', '}
              {` ${artist.name}`}
            </a>
          ))}
        </p>
      )
    }
  }
  const renderLinks = (stream) => {
    if (stream.length <= 1) {
      return
    } else {
      return (
        <div className='c-music-modal__stream'>
        {stream.map((link, i) => (
          <div key={i}>
            {link.url &&
            <a
              href={link.url}
              target='_blank'
              rel='noopener noreferrer'
              className='o-button-stream c-music-modal__stream-link'
            >
              {link.icon && 
                <FontAwesomeIcon className='c-music-modal__stream-icon' icon={['fab', `${link.icon}`]} />
              }
            {link.label && link.label}
            </a> }
          </div>
          ))}
          </div>
      )
    }
  }
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
  return (
    <section className='c-music-row l-wrapper'>
      <h2 className='c-music-row__heading u-heading-2 u-align-center'>
        Featured Music
      </h2>
      <div className='c-music-row__group c-carousel js-carousel js-carousel-blog'>
        {collection.map((collection, i) => (
          <article className='c-music-block' key={i}>
            <div
              className='c-music-block__image'
              style={{ backgroundImage: `url(${collection.image})` }}
              alt={collection.title}
            >
              <div className='c-music-block__overlay'></div>
              <h4 className='c-music-block__heading u-heading-4 u-align-center'>{collection.title}</h4>
              <button
                className='c-music-block__link o-button-secondary'
                onClick={toggleModalState}
              >
                Stream
              </button>
            </div>
            <div className='c-music-block__bg'></div>
          </article>
        ))}
      </div>
      {toggle && (
        <section
          data-module='hero'
          className='c-music-modal  u-text-align-center'
        >
          {collection.map((collection, i) => (
            <div key={i} className='c-music-modal'>
              <button
                className='c-music-modal__button'
                onClick={toggleModalState}
              >
                <FontAwesomeIcon icon={['fas', 'times']} />
              </button>
              <div className='l-grid'>
                <h1 className='c-music-modal__heading u-heading-1 u-align-center'>
                  {collection.title}
                </h1>
                <div className='c-music-modal__border-bottom'></div>
              </div>

              <div className='c-music-modal__music l-grid'>
                <div className='c-music-modal__image-group js-fill-color'>
                  <img
                    className='lozad c-music-modal__image'
                    src={collection.image}
                    data-placeholder-background='black'
                    alt=''
                  />
                </div>
                <div className='c-music-modal__music--info'>
                  {renderArtists(collection.artists, i)}
                  <p className='c-music-modal__tags'>
                    Genre: {collection.genre}
                  </p>
                  <p className='c-music-modal__tags'>Year: {collection.year}</p>
                  <p className='c-music-modal__tags'>Type: {collection.type}</p>
                </div>
              </div>
              <div className='c-music-modal__stream-group'>
                <h3 className='c-music-modal__stream-heading u-heading-3 u-align-center'>
                  Stream
                </h3>
                {renderLinks(collection.stream, i)}
              </div>
            </div>
          ))}
        </section>
      )}
    </section>
  )
}

export default Music
