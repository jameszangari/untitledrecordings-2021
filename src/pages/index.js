import { useState } from "react";
import { Client } from "@notionhq/client";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/youtube"), {
  ssr: false,
});
import Hero from "@/components/Hero";
import Artist from "@/components/Artist";
import Song from "@/components/Song";
import Button from "@/components/Button";
import index from "@/json/index";
import { motion } from "framer-motion";

export default function Index({ results }) {
  const allArtists = index.artists;
  const getArtists = () => {
    let artists = [];
    allArtists.forEach((post, i) => {
      artists.push(<Artist key={i} props={post} />);
    });
    return artists;
  };

  const getProjects = () => {
    let projects = [];
    results.forEach((post, i) => {
      if (post.properties.name.title[0].plain_text) {
        projects.push(
          <Song key={i} props={post.properties} url={post.properties.url.url} />
        );
      } else {
        return null;
      }
    });
    return projects;
  };

  const videoLinks = [
    "https://www.youtube.com/watch?v=Iuo-AM-BaHg",
    "https://www.youtube.com/watch?v=gaDKOWGSR8o",
    "https://www.youtube.com/watch?v=OWP9rgFav0g",
    "https://www.youtube.com/watch?v=wOQR7IU46yk&t=6s",
  ];
  const getVideos = () => {
    let videos = [];
    {
      videoLinks.map((link, i) => {
        videos.push(
          <div key={i} className="aspect-video w-full h-full max-w-2xl">
            <ReactPlayer
              url={link}
              width="100%"
              height="100%"
              className="aspect-video"
            />
          </div>
        );
      });
    }
    return videos;
  };

  const [postNum, setPostNum] = useState(6);
  const handleClick = () => {
    setPostNum((prevPostNum) => prevPostNum + 3);
  };

  return (
    <div className="w-full h-full">
      <Hero />
      <section className="c-artists-row pb-24" id="artists">
        <h1 className="ur-heading text-center py-10">Our Artists</h1>
        <motion.div
          className="c-artists-row__group flex flex-row flex-wrap justify-center max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          animate={{
            transition: {
              duration: 2,
            },
          }}
        >
          {getArtists()}
        </motion.div>
      </section>
      <section className="pb-24" id="music">
        <h1 className="ur-heading text-center py-10">Featured Music</h1>
        <motion.div
          className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center p-4 max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          animate={{
            transition: {
              duration: 2,
            },
          }}
        >
          {getProjects().slice(0, postNum)}
        </motion.div>
        <Button
          color="red"
          click={handleClick}
          label="Load More"
          props="mx-auto block"
        />
      </section>
      <section className="pb-24" id="videos">
        <h1 className="ur-heading text-center py-10">Featured Videos</h1>
        <motion.div
          className="flex flex-col flex-wrap justify-center items-center gap-8 p-4 max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          animate={{
            transition: {
              duration: 2,
            },
          }}
        >
          {getVideos()}
        </motion.div>
      </section>
    </div>
  );
}

export async function getStaticProps() {
  const notion = new Client({ auth: process.env.NOTION_API_SECRET });

  const databaseId = process.env.NOTION_API_BLOG_DATABASE_ID;
  const response = await notion.databases.query({
    database_id: databaseId,
    sorts: [
      {
        property: "ID",
        direction: "descending",
      },
    ],
  });

  return {
    props: {
      results: response.results,
    },
  };
}
