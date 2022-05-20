import { useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Button from "./Button";
import Close from "./Icons/close";
import Spotify from "./Icons/spotify";
import AppleMusic from "./Icons/applemusic";
import Deezer from "./Icons/deezer";
import Tunes from "./Icons/itunes";
import YouTube from "./Icons/youtube";
import Image from "next/image";
import Link from "next/link";

export default function Song({ url, props }) {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

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

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No data</p>;
  console.log(data);

  const services = data.services;

  return (
    <article className="h-80 w-80 m-1">
      {/* <h2>{data.author}</h2> */}
      {/* <h1>{data.metadata_title}</h1> */}
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
          <div className="fixed inset-0 bg-black/75" aria-hidden="true" />

          {/* Full-screen container to center the panel */}
          <div className="fixed inset-0 flex items-center justify-center p-4">
            {/* The actual dialog panel  */}
            <Dialog.Panel className="mx-auto w-full max-w-3xl rounded bg-black p-12 relative">
              <h1 className="text-3xl text-center pb-8">
                {data.metadata_title + " " + data.metadata_description}
              </h1>
              {/* <h1 className="text-base">{data.services[1].type}</h1> */}
              <div className="flex flex-row justify-center gap-12 pb-8">
                {services.slice(0, 5).map((item, i) => {
                  const name = item.service_name;
                  const src = item.url;
                  console.log(item);
                  return (
                    <Link href={src} passHref key={i}>
                      <a>
                        {name === "audiomack" ? (
                          "mack"
                        ) : name === "spotify" ? (
                          <Spotify className="h-12" />
                        ) : name === "apple-music" ? (
                          <AppleMusic className="h-12" />
                        ) : name === "deezer" ? (
                          <Deezer className="h-12" />
                        ) : name === "itunes" ? (
                          <Tunes className="h-12" />
                        ) : name === "youtube" ? (
                          <YouTube className="h-12" />
                        ) : (
                          name.replace(/-/g, "")
                        )}
                      </a>
                    </Link>
                  );
                })}
              </div>
              <audio controls src={data.preview_url}>
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
      <span className="opacity-0 hover:opacity-100 transition-all bg-black/75 cursor-pointer absolute z-10 h-80 w-80 grid place-items-center">
        {/* <button onClick={() => setIsOpen(true)}>Stream</button> */}
        <Button
          color="ur_red"
          hover="ur_dark_red"
          label="Stream"
          click={() => setIsOpen(true)}
        />
      </span>

      <Image
        alt={data.author + data.metadata_title}
        src={data.image_url ? data.image_url : ""}
        loading={"lazy"}
        height={320}
        width={320}
        className={"w-20 h-20 max-w-full"}
      />
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
