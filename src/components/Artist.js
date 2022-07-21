import { useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Button from "./Button";
import Close from "./Icons/close";
import Spotify from "./Icons/spotify";
import Link from "next/link";
import Instagram from "./Icons/instagram";
import Twitter from "./Icons/twitter";
import Twitch from "./Icons/twitch";
import Mail from "./Icons/mail";

export default function Artist({ props }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <section
        className="flex flex-col max-w-full m-1 transition-all"
        id={props.url}
      >
        <div
          className="group w-[300px] h-[150px] md:w-[175px] md:h-[500px] z-[2] bg-cover bg-center flex items-end cursor-pointer"
          style={{ backgroundImage: `url(${props.image})` }}
          onClick={() => setIsOpen(true)}
        >
          <div className="z-[3] mx-1 mb-4 p-2">
            <h3 className="z-[3] text-2xl text-white uppercase text-shadow font-primary font-semibold break-word text-left">
              {props.name}
            </h3>
            <div className="h-[6px] w-[75px] bg-ur_red mt-[6px]"></div>
            <Button
              color={"red"}
              label={"View Artist"}
              props={"hidden group-hover:flex mt-4"}
              click={() => setIsOpen(true)}
            />
          </div>
        </div>
      </section>
      <Transition
        show={isOpen}
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="relative z-50"
        >
          {/* The backdrop, rendered as a fixed sibling to the panel container */}
          <div
            className="fixed inset-0 bg-ur_dark_gray/30"
            aria-hidden="true"
          />
          {/* Full-screen container to center the panel */}
          <div className="fixed inset-0 flex items-center justify-center p-4">
            {/* The actual dialog panel  */}
            <Dialog.Panel className="mx-auto w-full max-w-3xl rounded bg-ur_black p-12 relative">
              <h1 className="ur-heading text-center">{props.name}</h1>
              <div className="h-[6px] w-[200px] bg-gradient-to-r from-ur_purple to-ur_blue mt-[6px] mx-auto"></div>
              <div className="mt-8 text-center">
                <p className="ur-title">
                  Roles:{" "}
                  <span className="text-ur_purple">
                    {props.roles.join(", ")}
                  </span>
                </p>
                <div className="flex flex-row mt-12 gap-8 justify-center">
                  {props.socials.map((item, i) => {
                    const name = item.label;
                    const src = item.url;
                    if (name.includes("spotify") && src != "") {
                      return (
                        <Link href={src} passHref key={i}>
                          <a target="_blank" rel="noopener noreferrer">
                            <Spotify className="h-14" />
                          </a>
                        </Link>
                      );
                    }
                    if (name.includes("envelope") && src != "") {
                      return (
                        <Link href={src} passHref key={i}>
                          <a target="_blank" rel="noopener noreferrer">
                            <Mail className="h-14" />
                          </a>
                        </Link>
                      );
                    }
                    if (name.includes("instagram") && src != "") {
                      return (
                        <Link href={src} passHref key={i}>
                          <a target="_blank" rel="noopener noreferrer">
                            <Instagram className="h-14" />
                          </a>
                        </Link>
                      );
                    }
                    if (name.includes("twitter") && src != "") {
                      return (
                        <Link href={src} passHref key={i}>
                          <a target="_blank" rel="noopener noreferrer">
                            <Twitter className="h-14" />
                          </a>
                        </Link>
                      );
                    }
                    if (name.includes("twitch") && src != "") {
                      return (
                        <Link href={src} passHref key={i}>
                          <a target="_blank" rel="noopener noreferrer">
                            <Twitch className="h-14" />
                          </a>
                        </Link>
                      );
                    }
                  })}
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="top-4 right-4 absolute"
              >
                <Close />
              </button>
            </Dialog.Panel>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
