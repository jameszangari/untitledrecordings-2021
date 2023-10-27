export default async function handler(req, res) {
  try {
    const response = await fetch(
      `https://api.song.link/v1-alpha.1/links?url=${encodeURIComponent(
        req.query.url
      )}&userCountry=US&songIfSingle=true&key=${
        process.env.NEXT_PUBLIC_ODELSI_KEY
      }`
    );
    const data = await response.json();

    // Add CORS headers to the response
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");

    // Return the data from the API
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while fetching data.");
  }
}
