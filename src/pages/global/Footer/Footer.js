import React from 'react'
import * as ga from '@/lib/ga' // Google Analytics
import './Footer.module.scss'
import index from '@/json/index'

function Footer () {
  // Google Analytics Tracking
  const contactEvt = () => {
    ga.event({
      action: 'contactEvt',
      category: 'ecommerce',
      label: 'Contact Link (Footer)'
    })
  }
  const getCurrentYear = () => {
    return new Date().getFullYear()
  }
  return (
    <div>
      <div className='c-footer-navigation__border'></div>
      <div className='c-footer-navigation'>
        <div className='c-footer-navigation__logo-group'>
          <a className='c-footer-navigation__logo-group--logo' href='/'>
            {index.footer.title}
          </a>
          <div className="c-footer-navigation__social">
            {index.footer.socials.map((social, i) =>
              <a href={social.url} key={i}>
                <img src={social.src} alt={social.label} className="c-footer-navigation__social--image"/>
              </a>
            )}
          </div>
          <p className='c-footer-navigation__logo-group--copyright'>
            &copy; {getCurrentYear()} {index.footer.title} <b>|</b> Website by
            <a
              className='c-footer-navigation__menu--side-group-link-button'
              href='https://jamescliff.com'
              rel='noopener noreferrer'
              target='_blank'
            >James Cliff</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
