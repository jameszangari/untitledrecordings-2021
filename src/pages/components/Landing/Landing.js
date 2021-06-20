import React, { useState, useEffect } from 'react'
import Cookie from 'js-cookie'
import { parseCookies } from '@/lib/parseCookies'
import Marquee from "react-fast-marquee";
import landing from '@/json/landing'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { getAverageColor } from 'fast-average-color-node';

const Landing = ({ initialRememberValue = true }) => {
    // Cookies: @link https://www.youtube.com/watch?v=_AYuhmz-fX4
    const [rememberMe, setRememberMe] = useState(() =>
        JSON.parse(initialRememberValue)
    );
    useEffect(() => {
        Cookie.set("rememberMe", JSON.stringify(rememberMe));
    }, [rememberMe]);
    // Modal state
    const [open, setOpen] = useState(true)
    const lockScroll = () => {
        useEffect( () => { document.querySelector("html").classList.add("is-open") } )
    }
    const unlockScroll = () => {
        useEffect( () => { document.querySelector("html").classList.remove("is-open") } )
    }
    const toggleModal = () => {
        if (rememberMe===true) {
            setOpen(false)
            e => setRememberMe(e.target.checked)
            lockScroll
        } else {
            setOpen(true)
            unlockScroll
            // return
        }
        // document.body.classList.remove('is-open');
        // document.documentElement.classList.remove('is-open');
        // setOpen(!open)
    }
    // let hexColor
    // getAverageColor(landing.image).then(color => {
    //     hexColor = color.hex
    // })
    // console.log("hex color " + hexColor)
    return (
        <section> {open &&
        <div className="c-landing">
            <label className="c-landing__close">
                <input 
                    type="checkbox"
                    value={rememberMe}
                    checked={rememberMe}
                    onChange={toggleModal}
                />
                <FontAwesomeIcon 
                    className="c-landing__close c-landing__close-toggle" 
                    icon="times" 
                />
                <span className="c-dark-mode__toggle"></span>
            </label>
            <Marquee
                speed={50}
                gradient={false}
                className="c-landing__marquee"
            >
                <span className="c-landing__marquee-text">NEW MUSIC</span>
                <span className="c-landing__marquee-text">NEW MUSIC</span>
                <span className="c-landing__marquee-text">NEW MUSIC</span>
                <span className="c-landing__marquee-text">NEW MUSIC</span>
                <span className="c-landing__marquee-text">NEW MUSIC</span>
                <span className="c-landing__marquee-text">NEW MUSIC</span>
                <span className="c-landing__marquee-text">NEW MUSIC</span>
                <span className="c-landing__marquee-text">NEW MUSIC</span>
                <span className="c-landing__marquee-text">NEW MUSIC</span>
                <span className="c-landing__marquee-text">NEW MUSIC</span>
                <span className="c-landing__marquee-text">NEW MUSIC</span>
                <span className="c-landing__marquee-text">NEW MUSIC</span>
                <span className="c-landing__marquee-text">NEW MUSIC</span>
                <span className="c-landing__marquee-text">NEW MUSIC</span>
                <span className="c-landing__marquee-text">NEW MUSIC</span>
                <span className="c-landing__marquee-text">NEW MUSIC</span>
                <span className="c-landing__marquee-text">NEW MUSIC</span>
                <span className="c-landing__marquee-text">NEW MUSIC</span>
            </Marquee>
            <div className="c-landing__content">
            <h1 className="c-landing__content-title" dangerouslySetInnerHTML={{__html: landing.title }}/>
            <div className="c-landing__wrapper">
                <div
                    className="c-landing__wrapper-top"
                    style={{
                        backgroundColor: 
                        'red'
                    }}>
                    <img className="c-landing__wrapper-image" src={ landing.image } alt="" />
                </div>
                <div className="c-landing__wrapper-bottom">
                    <h4 className="c-landing__wrapper-bottom-type" dangerouslySetInnerHTML={{__html: landing.type + " by" }}/>
                    <h2 className="c-landing__wrapper-bottom-artists" dangerouslySetInnerHTML={{__html: landing.artists }}/>
                </div>
            </div>
            <button className="o-button-primary">Stream</button>
            </div>
        </div> 
        } </section>
    )
}

Landing.getInitialProps = ({ req }) => {
    const cookies = parseCookies(req);

    return {
      initialRememberValue: cookies.rememberMe
    };
}

export default Landing
