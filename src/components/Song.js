import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Song({ song }) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://www.toneden.io/api/v1/links/expand?target_type=music&url=${encodeURIComponent(
        song
      )}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [song]);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;
  console.log(data);

  const services = data.services;
  // console.log(services);

  return (
    <div>
      {/* <h2>{data.author}</h2> */}
      {/* <h1>{data.metadata_title}</h1> */}
      <h1>{data.services[1].owner.username}</h1>
      <h1>
        {data.services[1].album.title
          ? data.services[1].album.title
          : data.metadata_title}
      </h1>
      <h1>{data.services[1].type}</h1>
      <div className="flex flex-row gap-4">
        {services.slice(0, 5).map((item, i) => {
          const name = item.service_name;
          const url = item.url;
          return (
            <Link href={url} passHref key={i}>
              <a>{name}</a>
            </Link>
          );
        })}
      </div>
      <audio controls src={data.preview_url}>
        Your browser does not support the
        <code>audio</code> element.
      </audio>

      <Image
        alt={data.author + data.metadata_title}
        src={data.image_url}
        loading={"lazy"}
        height={320}
        width={320}
        className={"w-20 h-20 max-w-full"}
      />
    </div>
  );
}
