import { getSeasonDetailsAPIUrl } from "../../utils/apiUtills";
import httpService from "../../utils/httpService";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { id, seasonNumber } = req.body;
    const url = getSeasonDetailsAPIUrl(id, seasonNumber);
    const seasonDetails = await httpService.get(url);
    console.log(url);
    res.status(200).json(seasonDetails);
  } else {
    res.status(200).json({ name: "Moviezine" });
  }
}
