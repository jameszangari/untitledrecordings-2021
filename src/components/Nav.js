import React, { useState } from "react";
// import "hamburgers/dist/hamburgers.css";
import index from "@/json/index";
import Link from "next/link";

export default function HeaderGlobal() {
  const [toggle, setToggle] = useState(null);
  const [open, setOpen] = useState(false);
  const navigation = index.navigation;
  return (
    <div className="c-header">
      {/* <MediaQuery query='(min-width: 1024px)'>
        <h1 className='c-header__logo c-header__logo-full'>
          <a href='/'>Untitled Recordings</a>
        </h1>
        <nav className='c-navigation__desktop' role='navigation' aria-label='primary'>
          <ul
            className={
              open
                ? 'c-navigation__desktop-menu c-navigation__desktop-menu--open'
                : 'c-navigation__desktop-menu'
            }
          >
            {navigation.map((nav, i) => (
              <li className='c-navigation__desktop-menu-item' key={'main ' + i}>
                {
                  <a
                    className={
                      toggle === i
                        ? 'c-navigation__desktop-link is-active'
                        : 'c-navigation__desktop-link'
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
          </ul>
        </nav>
      </MediaQuery> */}
      {/* <MediaQuery query='(max-width: 1023px)'> */}
      <Link href="/" passHref>
        <h1 className="font-secondary font-extrabold italic text-2xl">UR</h1>
      </Link>
      <button
        className={
          open
            ? "c-navigation__hamburger js-navigation__hamburger hamburger--spin is-active"
            : "c-navigation__hamburger js-navigation__hamburger hamburger--spin"
        }
        type="button"
        onClick={() => {
          setOpen(!open);
        }}
      >
        Toggle Menu
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
      {/* </MediaQuery> */}
      {open && (
        <nav
          className="c-navigation__mobile"
          role="navigation"
          aria-label="primary"
        >
          <ul
            className={
              open
                ? "c-navigation__mobile-menu c-navigation__mobile-menu--open"
                : "c-navigation__mobile-menu"
            }
          >
            {navigation.map((nav, i) => (
              <li className="c-navigation__mobile-menu-item" key={i}>
                {
                  <a
                    className={
                      toggle === i
                        ? "c-navigation__mobile-link is-active"
                        : "c-navigation__mobile-link"
                    }
                    tabIndex={i}
                    role="button"
                    onClick={() =>
                      setToggle((toggle) => (toggle === i ? null : i))
                    }
                    href={nav.url ? nav.url : null}
                  >
                    {nav.label}
                  </a>
                }
              </li>
            ))}
            <div className="c-header__line"></div>
          </ul>
        </nav>
      )}
    </div>
  );
}
