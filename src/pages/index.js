import Song from "@/components/Song";

export default function Index() {
  let songs = [
    "https://open.spotify.com/track/3VBDGFrGgTzqnG01UKMx7p?si=02443a6a34a64dce",
    "https://open.spotify.com/track/1miBEMjH0TTnNyJd55exKK?si=5c4e37997ae24a55",
    "https://open.spotify.com/track/1O6eGZ0eCbXxkxBqMdOnGV?si=5382a91b18364d9c",
  ];

  return (
    <div className="w-full h-full">
      {songs.map((item, i) => {
        return <Song song={item} key={i} />;
      })}
    </div>
  );
}
