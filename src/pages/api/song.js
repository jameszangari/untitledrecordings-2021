export default async function handler(req, res) {
  const url = `https://api.song.link/v1-alpha.1/links?url=${encodeURIComponent(
    req.query.url
  )}&userCountry=US&songIfSingle=true&key=${process.env.ODELSI_KEY}`;

  const response = await fetch(url);
  const data = await response.json();

  res.status(200).json(data);
}
