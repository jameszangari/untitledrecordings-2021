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
  const [isOpen, setIsOpen] = useState(false);
  // console.log(isOpen);

  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://www.toneden.io/api/v1/links/expand?target_type=music&url=${encodeURIComponent(
        url
      )}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [url]);

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
  if (!data) return <p className="h-80 w-80 text-center">No data</p>;
  // console.log(data);

  const services = data.services;

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
              <h1 className="ur-heading text-center">
                {data.metadata_title + " " + data.metadata_description}
              </h1>
              <div className="h-[6px] w-[200px] bg-gradient-to-r from-ur_purple to-ur_blue mt-[6px] mx-auto"></div>
              {/* <h1 className="text-base">{data.services[1].type}</h1> */}
              <h2 className="ur-title text-center pt-8">Stream:</h2>
              <div className="flex flex-row mt-12 gap-8 justify-center">
                {services.slice(0, 5).map((item, i) => {
                  const name = item.service_name;
                  const src = item.url;
                  if (name.includes("spotify")) {
                    return (
                      <Link href={src} passHref key={i}>
                        <a target="_blank" rel="noopener noreferrer">
                          <Spotify className="h-14" />
                        </a>
                      </Link>
                    );
                  }
                  if (name.includes("apple-music")) {
                    return (
                      <Link href={src} passHref key={i}>
                        <a target="_blank" rel="noopener noreferrer">
                          <AppleMusic className="h-14" />
                        </a>
                      </Link>
                    );
                  }
                  if (name.includes("itunes")) {
                    return (
                      <Link href={src} passHref key={i}>
                        <a target="_blank" rel="noopener noreferrer">
                          <Tunes className="h-14" />
                        </a>
                      </Link>
                    );
                  }
                  if (name.includes("youtube")) {
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
              <audio className="mx-auto mt-8" controls src={data.preview_url}>
                Your browser does not support the
                <code>audio</code> element.
              </audio>
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
      {/* <div className="h-64 w-64 sm:h-80 sm:w-80 opacity-0 hover:opacity-100 transition-all bg-black/75 cursor-pointer absolute z-10 grid place-items-center">
        <Button
          color={"red"}
          label={"Stream"}
          props={""}
          click={() => setIsOpen(true)}
        />
      </div> */}
      <div
        className="group cursor-pointer sm:max-w-none max-w-[300px]"
        onClick={() => setIsOpen(true)}
      >
        {data.image_url && (
          <Image
            alt={data.author + " - " + data.metadata_title}
            src={data.image_url}
            loading={"lazy"}
            height={640}
            width={640}
          />
        )}
        <div className="text-center">
          <h2 className="ur-subtitle mt-4">{data.author}</h2>
          <h1 className="ur-title">{data.metadata_title}</h1>
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
