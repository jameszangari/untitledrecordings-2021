import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import index from "@/json/index";
import Button from "./Button";

function Artists() {
  const artists = index.artists;
  const [isOpen, setIsOpen] = useState(false);
  const renderLinks = (socials) => {
    if (socials.length <= 1) {
      return;
    } else {
      return (
        <div>
          {socials.map((social, i) => (
            <a
              key={i}
              href={social.url}
              className="c-hero-artist__socials-link"
            >
              {/* <FontAwesomeIcon
                icon={[`${social.style}`, `${social.label}`]}
                className={social.style + "-" + social.label + "--hover"}
              /> */}
            </a>
          ))}
        </div>
      );
    }
  };
  return (
    <section className="c-artists-row pb-40" id="artists">
      <h1 className="c-artists-row__heading u-heading-2 text-center font-bold">
        Our Artists
      </h1>
      <div className="c-artists-row__group flex flex-row flex-wrap justify-center mt-9">
        {artists.map((artist, i) => {
          return (
            <section
              className="c-artist-block flex flex-col max-w-full m-1"
              key={i}
              id={artist.url}
            >
              <div
                className="c-artist-block__image w-[300px] h-[150px] md:w-[175px] md:h-[500px] z-[2] bg-cover bg-center flex items-end"
                style={{ backgroundImage: `url(${artist.image})` }}
              >
                <span className="c-artist-block__content z-[3] ml-[10px]">
                  <h3 className="c-artist-block__heading inline z-[3] text-2xl font-bold text-white uppercase hover:cursor-default mr-[60px]">
                    {artist.name}
                  </h3>
                  <div className="c-artist-block__heading--border h-[6px] w-[75px] bg-ur_red mt-[6px]"></div>
                  <Button
                    color="ur_dark_blue"
                    hover="ur_blue"
                    label="View Artist"
                    className="my-[20px]"
                    click={() => setIsOpen(true)}
                  />
                </span>
                <div className="c-artist-block__overlay"></div>
              </div>
              <div className="c-artist-block__bg"></div>
            </section>
          );
        })}
      </div>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        {/* Full-screen container to center the panel */}
        <div className="fixed inset-0 flex items-center justify-center p-4">
          {/* The actual dialog panel  */}
          <Dialog.Panel className="mx-auto w-full max-w-3xl rounded bg-black p-12">
            <p>test</p>
          </Dialog.Panel>
        </div>
      </Dialog>
      {/* {toggle && (
        <section
          data-module="hero"
          className="c-hero-artist c-artist-modal text-center text-white fixed top-0 left-0 w-full h-full block z-[999] bg-ur_black"
        >
          {artists.map((artist, i) => (
            <div key={i}>
              <button
                className="c-music-modal__button"
                onClick={toggleModalState}
              ></button>
              <div className="l-grid">
                <h1 className="c-hero-artist__heading u-heading-1 pt-[60px] uppercase font-bold">
                  {artist.name}
                </h1>
                <div className="c-hero-artist__border-bottom w-[200px] h-[6px] bg-gradient-to-tr from-ur_purple via-ur_purple to-ur_blue"></div>
              </div>
              <div className="c-hero-artist__artist l-grid flex flex-col justify-center mt-[100px] md:flex-row">
                <div className="c-hero-artist__image-group flex justify-center rounded-full md:justify-end md:w-1/2">
                  <img
                    className="lozad c-hero-artist__image rounded-full h-[250px] w-[250px] md:h-[300px] md:w-[300px]"
                    src={artist.image}
                    data-placeholder-background="black"
                    alt={artist.name + " portrait"}
                  />
                </div>
                <div className="c-hero-artist__artist--info flex flex-col justify-center ml-0 mt-[60px] text-center w-full md:ml-[40px] md:text-left md:w-1/2">
                  <p className="c-hero-artist__artist--info-bio u-paragraph"></p>
                  <div className="c-hero-artist__socials">
                    {renderLinks(artist.socials)}
                  </div>
                  <div className="c-hero-artist__tags">
                    Roles:
                    <a href="">
                      <span className="c-hero-artist__tag"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      )} */}
    </section>
  );
}

export default Artists;