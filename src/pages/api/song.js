export default async function handler(req, res) {
  const url = `https://api.song.link/v1-alpha.1/links?url=${encodeURIComponent(
    req
  )}&userCountry=US&songIfSingle=true&key=499b4465-1232-47c8-b46b-47c8d2e78ede`;

  const response = await fetch(url);
  const data = await response.json();

  res.setHeader("Access-Control-Allow-Origin", "*");

  return res.status(200).json(data);
}
