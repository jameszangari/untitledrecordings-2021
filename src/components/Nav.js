import React, { useState } from "react";
import "hamburgers/dist/hamburgers.css";
import index from "@/json/index";

export default function HeaderGlobal() {
  const [open, setOpen] = useState(false);
  const navigation = index.navigation;

  function toggleMenuState(e) {
    setOpen((toggle) => {
      const newState = !toggle;
      return newState;
    });
  }
  return (
    <div className="w-full fixed flex justify-end top-0 bg-ur_black z-40 p-4">
      <button
        className={
          open ? "z-50 hamburger--spin is-active" : "z-50 hamburger--spin"
        }
        type="button"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
      {open && (
        <>
          <div className="absolute top-0 z-30 w-64 bg-black">
            <div className="h-screen w-[6px] bg-gradient-to-b from-ur_blue to-ur_purple"></div>
          </div>
          <nav
            className="absolute h-screen top-0 right-0 bg-ur_black pt-24 px-16 w-64 z-40"
            role="navigation"
            aria-label="primary"
          >
            <ul className="ur-title uppercase flex flex-col gap-4 justify-center">
              {navigation.map((nav, i) => (
                <li className="hover:text-ur_blue transition-all" key={i}>
                  {
                    <a
                      className=""
                      tabIndex={i}
                      role="button"
                      onClick={toggleMenuState}
                      href={nav.url ? nav.url : null}
                    >
                      {nav.label}
                    </a>
                  }
                </li>
              ))}
            </ul>
          </nav>
        </>
      )}
    </div>
  );
}
