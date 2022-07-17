import React from "react";
import index from "@/json/index";
import Logo from "./Icons/logo";

function Hero() {
  return (
    <section className="c-hero-front max-w-6xl mx-auto p-4 py-64">
      {/* <MediaQuery query="(min-width: 1024px)">
        <h1 className="c-hero-front__logo c-hero-front__logo-full">
          {index.meta.title}
        </h1>
      </MediaQuery> */}
      {/* <MediaQuery query="(max-width: 1023px)"> */}
      <Logo className="w-full" />
      <h1 className="font-secondary font-extrabold italic text-6xl sm:hidden md:block">
        UR
      </h1>
      {/* </MediaQuery> */}
      <div className="c-hero-front__border"></div>
      <div className="c-hero-front__group flex mt-4">
        <div className="h-[6px] w-96 bg-gradient-to-r from-ur_purple to-ur_blue mt-[6px] mx-auto"></div>
        <p className="c-hero-front__info u-paragraph ml-4">
          {index.meta.descriptionFull}
        </p>
      </div>
    </section>
  );
}

export default Hero;
