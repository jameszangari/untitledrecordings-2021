import { Client } from "@notionhq/client";
import Artists from "@/components/Artists";
import Song from "@/components/Song";

export default function Index({ results }) {
  const getProjects = () => {
    let projects = [];
    console.log(projects);
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
    return projects.reverse();
    // return projects[0]; // TODO: remove 0 for testing
  };

  return (
    <div className="w-full h-full">
      <Artists />
      <div className="flex flex-row flex-wrap justify-center items-center p-4">
        {getProjects()}
      </div>
    </div>
  );
}

export async function getStaticProps() {
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
