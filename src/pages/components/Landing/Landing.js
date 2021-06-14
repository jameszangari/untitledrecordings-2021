import React, { useState } from 'react'
import Marquee from "react-fast-marquee";
import landing from '@/json/landing'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { getAverageColor } from 'fast-average-color-node';

function Landing () {
    const [open, setOpen] = useState(true)
    const toggleModal = () => {
        document.body.classList.remove('is-open');
        document.documentElement.classList.remove('is-open');
        setOpen(!open)
    }
    
    // let hexColor
    // getAverageColor(landing.image).then(color => {
    //     hexColor = color.hex
    // })
    // console.log("hex color " + hexColor)

    return (
        <section> {open &&
        <div className="c-landing">
            <FontAwesomeIcon className="c-landing__close" onClick={toggleModal} icon="times"/>
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
                        'yes'
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
        </div> }
        </section>
    )
}

export default Landing
