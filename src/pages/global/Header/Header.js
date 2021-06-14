import React, { useState } from 'react'
import MediaQuery from 'react-responsive'
import 'hamburgers/dist/hamburgers.css'
import * as ga from '@/lib/ga' // Google Analytics
import index from '@/json/index'

function HeaderGlobal () {
  const [toggle, setToggle] = useState(null)
  const [open, setOpen] = useState(false)
  const navigation = index.navigation
  return (
    <div className="c-header">
      <MediaQuery query='(min-width: 1024px)'>
        <h1 className='c-header__logo c-header__logo-full'>
          <a href='/'>Untitled Recordings</a>
        </h1>
      </MediaQuery>
      <MediaQuery query='(max-width: 1023px)'>
        <h1 className='c-header__logo c-header__logo-icon'>
          <a href='/'>UR</a>
        </h1>
      </MediaQuery>
      <button
        className={
          open
            ? 'c-navigation__hamburger js-navigation__hamburger hamburger--spin is-active'
            : 'c-navigation__hamburger js-navigation__hamburger hamburger--spin'
        }
        type='button'
        onClick={() => {
          setOpen(!open)
        }}
      >
        <span className='hamburger-box'>
          <span className='hamburger-inner'></span>
        </span>
      </button>
      {open && (
        <nav className='c-navigation' role='navigation' aria-label='primary'>
          <ul
            className={
              open
                ? 'c-navigation__menu c-navigation__menu--open'
                : 'c-navigation__menu'
            }
          >
            {navigation.map((nav, i) => (
              <li className='c-navigation__menu-item' key={'main ' + i}>
                {
                  <a
                    className={
                      toggle === i
                        ? 'c-navigation__link is-active'
                        : 'c-navigation__link'
                    }
                    tabIndex={i}
                    role='button'
                    onClick={() =>
                      setToggle(toggle => (toggle === i ? null : i))
                    }
                    href={nav.url ? nav.url : null}
                  >
                    {nav.label}
                  </a>
                }
              </li>
            ))}
            <div className='c-header__line'></div>
          </ul>
        </nav>
      )}
    </div>
  )
}

export default HeaderGlobal
