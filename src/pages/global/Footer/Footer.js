import React from 'react'
import * as ga from '@/lib/ga' // Google Analytics
// import {} from '@/global/FooterStyles'
// import { FooterWrapper } from './FooterStyles'
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
          <p
            className='c-footer-navigation__logo-group--bio'
            dangerouslySetInnerHTML={{ __html: index.footer.description }}
          />
          <p className='c-footer-navigation__logo-group--copyright'>
            &copy; {getCurrentYear()} {index.footer.title}
          </p>
        </div>
        <ul className='c-footer-navigation__menu--side-group'>
          <p className='c-footer-navigation__menu--side-group-header'>NEED A SESSION?</p>
          <p className='c-footer-navigation__menu--side-group-body'>Book your studio time today.</p>
          <a
            className='c-footer-navigation__menu--side-group-button o-button-secondary'
            href=''
          >
            Contact Us
          </a>
          <p className='c-footer-navigation__menu--side-group-link'>
            Website by
            <a
              className='c-footer-navigation__menu--side-group-link-button'
              href='https://jamescliff.com'
              rel='noopener noreferrer'
              target='_blank'
            >James Cliff</a>
          </p>
        </ul>
      </div>
    </div>
  )
}

export default Footer
