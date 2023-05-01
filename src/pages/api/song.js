export default async function handler(req, res) {
  console.log(req);
  console.log(res);

  const url = `https://api.song.link/v1-alpha.1/links?url=${encodeURIComponent(
    req
  )}&userCountry=US&songIfSingle=true&key=499b4465-1232-47c8-b46b-47c8d2e78ede`;

  const response = await fetch(url);
  const data = await response.json();
  return data;
  // res.status(200).json(data);
}
