import Artists from "@/components/Artists";
import Song from "@/components/Song";

export default function Index() {
  let songs = [
    "https://open.spotify.com/track/1miBEMjH0TTnNyJd55exKK?si=5c4e37997ae24a55",
    "https://open.spotify.com/track/1O6eGZ0eCbXxkxBqMdOnGV?si=5382a91b18364d9c",
    "https://open.spotify.com/track/1ElM7hc0EXAe9pyFMbm9Wj?si=f52f4fba14fd4a1a",
    "https://open.spotify.com/track/3VBDGFrGgTzqnG01UKMx7p?si=02443a6a34a64dce",
    "https://open.spotify.com/album/15o9GJUAqpbNPiWr5LdIgJ?si=xDOmM70BRHOLNOdZlZwCdA",
    "https://open.spotify.com/album/3dwok6ueI4WPbsMOop6814?si=Sv4aSULgSVamZmxbc0fN3g",
    "https://open.spotify.com/track/2bTxxONcFivqfURhVvOqmz?si=7958d1fdbd7c4af5",
    "https://open.spotify.com/track/7gDayCCEAFoyFysEEIthWc?si=f0450f56e0cb405d",
    "https://open.spotify.com/track/1310vw9Kj8XJ7zntGvbbee?si=23ed028bd42a4b3d",
    "https://open.spotify.com/track/2FW8BM9oEft91tRVGr6gI8?si=a9dc600de04842c4",
    "https://open.spotify.com/album/5uctj91Xuii0HJzQ78e68h?si=fKEtlaAeRruZk6bsE3zgRQ",
    "https://open.spotify.com/album/50LtoodwqbWcxADL8l1OMR?si=jDDA1MbFSfeQwxkYIBBmEg",
    "https://open.spotify.com/album/1yj3SVV4DYLzGJCEPAfi2y?si=5fohv4URQTqhobO0R1c33g",
    "https://open.spotify.com/track/08mqfCPp1BkxDyCBNcFrFb?si=182b881b41414622",
    "https://open.spotify.com/track/0y8es0wGlrun61nniyvbKV?si=17f5c62e34ca4fe7",
    "https://open.spotify.com/album/5tWBq0UYmuwdGTElNa5HZi?si=rz1ON1WrT8Kv6u9p21CQzQ",
    "https://open.spotify.com/track/5yYzoe2QkqQyUXbRPyNuKT?si=0d58d7cbaefe4d42",
    "https://open.spotify.com/album/0tmpjwZi23Fb7IIKJEDwZw?si=AAVx2lmuRZuLvASiVtH2_g",
    "https://open.spotify.com/track/1QgoAwl5Q7FfKhySL72VbA?si=788d6962c02446dc",
    "https://open.spotify.com/track/0wQpSO87rZxji1xuA2w83i?si=c64cd5cdba624e85",
    "https://open.spotify.com/track/6EP6maIUia5I9uMUflS9Mz?si=a3d6290b10e44fb5",
    "https://open.spotify.com/track/2Xf0zBFMMjVOGG1B3QH7ek?si=4553f3771649458d",
    "https://open.spotify.com/album/62LRP7AcbW0HyBxreuZpfO?si=Y_KsVp9dRrKBrYQy-HxU2w",
    "https://open.spotify.com/track/3tJIwm0HNS9Wu4tdmrSNNM?si=928a521c6f5e4d85",
    "https://open.spotify.com/track/1LXgvtsGVsa8koDjZKcM5N?si=d68348089087415c",
    "https://open.spotify.com/track/3vkmrzSCbceiOZ6Btp2ICU?si=6dfaee36d37748b6",
    "https://open.spotify.com/track/56ytKZJgo9vfGtRCGwiJq9?si=928e9b0733e04411",
    "https://open.spotify.com/track/5jOrFuUiHeG6mywQ1tKqdl?si=e0d9cd6c3b974ee3",
    "https://open.spotify.com/track/5oD8uqkQWUXpf1pjsOuXKi?si=c2636f3ef8094adf",
    "https://open.spotify.com/track/62WGLOJTex8LFYaLzZscrL?si=00767eb3878b476f",
    "https://open.spotify.com/track/58iUNZLMrEWMBoBgr5xowB?si=30666bdc71c54463",
    "https://open.spotify.com/track/6U0AaH7nilZy1sQvuM27pZ?si=569451d6b4de4316",
    "https://open.spotify.com/track/2cACpPzazHSgTnd1q79wba?si=4c6d6e6a24ff4f4d",
    "https://open.spotify.com/track/6iWQq8b7Km8bgQQUSHiCXF?si=169d10ef566a4479",
    "https://open.spotify.com/track/6uJElvP1flAyAnj3UI9J0r?si=3193c236e51642d0",
    "https://open.spotify.com/album/6URGKY2x6DUJVddah5Grkz?si=tQnMW3t2QaK4jZ-HyFWIaQ",
    "https://open.spotify.com/track/45KIB5ScYw7C9CEZt3IGQL?si=7459d1d287b747a8",
    "https://open.spotify.com/track/5DicKO83JcC83OFTuEWI17?si=a0e3cc82c5b241fe",
    "https://open.spotify.com/album/2d9JxVGsq1AGItAfKb8mgt?si=RDueMW69RYaDKuJkQVaRpg",
    "https://open.spotify.com/album/0owCV32Ce7yhnXdDwCEzVy?si=81qbV8MbTaqNxGt-Hyvk0A",
  ];

  return (
    <div className="w-full h-full">
      <Artists />
      <div className="flex flex-row flex-wrap justify-center items-center p-4">
        {songs.map((item, i) => {
          return <Song song={item} key={i} />;
        })}
      </div>
    </div>
  );
}
