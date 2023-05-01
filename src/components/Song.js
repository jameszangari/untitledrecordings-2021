import { useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Button from "./Button";
import Close from "./Icons/close";
import Spotify from "./Icons/spotify";
import AppleMusic from "./Icons/applemusic";
import Tunes from "./Icons/itunes";
import YouTube from "./Icons/youtube";
import Image from "next/image";
import Link from "next/link";

export default function Song({ url, props }) {
  const cleanedUrl = url.replace(/^"(.*)"[,]*$/, "$1");
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      try {
        const response = await fetch(
          `https://api.song.link/v1-alpha.1/links?url=${encodeURIComponent(
            cleanedUrl
          )}&userCountry=US&songIfSingle=true&key=${
            process.env.NEXT_PUBLIC_ODELSI_KEY
          }`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          }
        );
        const json = await response.json();
        setData(json);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    }
    fetchData();
  }, [cleanedUrl]);

  console.log(data);

  const songID = data?.entityUniqueId;
  const song = data?.entitiesByUniqueId?.[songID];
  const songImage = data?.entitiesByUniqueId?.[songID]["thumbnailUrl"];
  const songTitle = data?.entitiesByUniqueId?.[songID]["title"];
  const songArtist = data?.entitiesByUniqueId?.[songID]["artistName"];
  const songType = data?.entitiesByUniqueId?.[songID]["type"];
  const songInfo = data?.linksByPlatform;
  const songUrls = () => {
    if (songInfo) {
      return Object.entries(songInfo).map(([platform, data]) => ({
        platform,
        url: data.url,
      }));
    }
  };

  if (isLoading)
    return (
      <div className="h-80 w-80 flex flex-row justify-center items-center uppercase">
        <p className="mr-2">Loading</p>
        <Image
          src="/loading.gif"
          alt="Loading"
          height={24}
          width={24}
          className="block"
          loading="lazy"
        />
      </div>
    );
  if (data == undefined) {
    return <p className="h-80 w-80 text-center">No data</p>;
  } else {
    return (
      <article className="m-1">
        {/* <article className="h-64 w-64 sm:h-80 sm:w-80 m-1"> */}
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
                <h1 className="ur-heading text-center">{songTitle}</h1>
                <div className="h-[6px] w-[200px] bg-gradient-to-r from-ur_purple to-ur_blue mt-[6px] mx-auto"></div>
                <h1 className="text-base text-center uppercase mt-6">
                  {songType + " by " + songArtist}
                </h1>
                <h2 className="ur-title text-center pt-12">Stream:</h2>
                <div className="flex flex-row mt-8 gap-8 justify-center">
                  {songUrls().map((item, i) => {
                    const name = item.platform;
                    const src = item.url;
                    if (name === "spotify") {
                      return (
                        <Link href={src} passHref key={i}>
                          <a target="_blank" rel="noopener noreferrer">
                            <Spotify className="h-14" />
                          </a>
                        </Link>
                      );
                    }
                    if (name === "appleMusic") {
                      return (
                        <Link href={src} passHref key={i}>
                          <a target="_blank" rel="noopener noreferrer">
                            <AppleMusic className="h-14" />
                          </a>
                        </Link>
                      );
                    }
                    if (name === "itunes") {
                      return (
                        <Link href={src} passHref key={i}>
                          <a target="_blank" rel="noopener noreferrer">
                            <Tunes className="h-14" />
                          </a>
                        </Link>
                      );
                    }
                    if (name === "youtube") {
                      return (
                        <Link href={src} passHref key={i}>
                          <a target="_blank" rel="noopener noreferrer">
                            <YouTube className="h-14" />
                          </a>
                        </Link>
                      );
                    }
                  })}
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
        <div
          className="group cursor-pointer sm:max-w-none max-w-[300px] transition-all"
          onClick={() => setIsOpen(true)}
        >
          <Image
            alt={songTitle + " cover"}
            src={songImage ? songImage : "/loading.gif"}
            loading={"lazy"}
            height={640}
            width={640}
            className="group-hover:grayscale"
          />

          <div className="text-center">
            <h2 className="ur-subtitle mt-4 mb-2">{songArtist}</h2>
            <h1 className="ur-title">{songTitle}</h1>
            <Button
              color={"gray"}
              label={"Stream"}
              props={
                "w-full justify-center mt-4 mb-8 opacity-0 group-hover:opacity-100"
              }
              click={() => setIsOpen(true)}
            />
          </div>
        </div>
      </article>
    );
  }
}
export async function getServerSideProps() {
  const notion = new Client({ auth: process.env.NOTION_API_SECRET });

  const databaseId = process.env.NOTION_API_BLOG_DATABASE_ID;
  const response = await notion.databases.query({
    database_id: databaseId,
  });
  return {
    props: {
      results: response.results,
    },
  };
}
