import { useState } from "react";
import { Client } from "@notionhq/client";
import Button from "@/components/Button";
import Artist from "@/components/Artist";
import Song from "@/components/Song";
import index from "@/json/index";

export default function Index({ results }) {
  const allArtists = index.artists;

  const getArtists = () => {
    let artists = [];
    console.log(allArtists);
    allArtists.forEach((post) => {
      artists.push(
        <Artist
          key={post.id}
          props={post}
          // url={post.properties.url.url}
        />
      );
    });
    console.log(artists);
    return artists;
    // return artists[0]; // TODO: remove 0 for testing
  };
  const getProjects = () => {
    let projects = [];
    // console.log(projects);
    results.forEach((post) => {
      if (post.properties.name.title[0].plain_text) {
        projects.push(
          <Song
            key={post.id}
            props={post.properties}
            url={post.properties.url.url}
          />
        );
      } else {
        return null;
      }
    });
    console.log(projects);
    return projects;
    // return projects[0]; // TODO: remove 0 for testing
  };
  const [postNum, setPostNum] = useState(6); // Default number of posts dislplayed

  function handleClick() {
    setPostNum((prevPostNum) => prevPostNum + 3); // 3 is the number of posts you want to load per click
  }
  return (
    <div className="w-full h-full">
      <section className="c-artists-row pb-24" id="artists">
        <h1 className="uppercase text-center font-bold text-4xl py-16">
          Our Artists
        </h1>
        <div className="c-artists-row__group flex flex-row flex-wrap justify-center max-w-6xl mx-auto">
          {getArtists()}
        </div>
      </section>
      <section className="pb-24" id="music">
        <h1 className="uppercase text-center font-bold text-4xl py-16">
          Featured Music
        </h1>
        <div className="flex flex-row flex-wrap justify-center items-center p-4 max-w-6xl mx-auto">
          {getProjects().slice(0, postNum)}
        </div>
        <Button
          color="red"
          click={handleClick}
          label="Load More"
          props="mx-auto block"
        />
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
