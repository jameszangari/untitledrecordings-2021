import React from "react";
import index from "@/json/index";
import Discord from "@/icons/discord";
import Instagram from "@/icons/instagram";
import Twitter from "@/icons/twitter";
import Twitch from "@/icons/twitch";
import Emoji from "@/icons/emoji";
import LogoFull from "@/icons/logoFull";

export default function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };
  return (
    <section id="contact">
      <div className="bg-gradient-to-r from-ur_red to-ur_blue w-full h-2"></div>
      <div className="flex flex-col justify-center max-w-sm mx-auto px-4">
        {/* <h1 className="font-secondary font-extrabold italic text-2xl mt-12 text-center">
          Untitled Recordings
        </h1> */}
        <h1 className="mt-12">
          <LogoFull className="w-full" />
        </h1>
        <div className="grid grid-cols-2 justify-center gap-2 mt-6 w-64 mx-auto">
          <span className="flex flex-row w-max">
            <Emoji symbol="🎙️" label="microphone" />
            <p className="ml-2 ur-body text-ur_gray">Recording</p>
          </span>
          <span className="flex flex-row w-max">
            <Emoji symbol="🎹" label="piano" />
            <p className="ml-2 ur-body text-ur_gray">Production</p>
          </span>
          <span className="flex flex-row w-max">
            <Emoji symbol="🎧" label="headphones" />
            <p className="ml-2 ur-body text-ur_gray">Mixing</p>
          </span>
          <span className="flex flex-row w-max">
            <Emoji symbol="💿" label="compact-disk" />
            <p className="ml-2 ur-body text-ur_gray">Mastering</p>
          </span>
        </div>
        <div className="flex flex-row justify-center gap-4 mt-6">
          {index.footer.socials.map((social, i) => {
            if (social.label === "discord") {
              return (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Discord className="h-14" />
                </a>
              );
            }
            if (social.label === "instagram") {
              return (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-14" />
                </a>
              );
            }
            if (social.label === "twitter") {
              return (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="h-14" />
                </a>
              );
            }
            if (social.label === "twitch") {
              return (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitch className="h-14" />
                </a>
              );
            }
          })}
        </div>
        <p className="text-center mt-12 mb-8 font-primary text-base text-ur_gray">
          &copy; {getCurrentYear()} {index.footer.title}
        </p>
      </div>
    </section>
  );
}
