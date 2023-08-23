import { getMediaDetailsDataAPIUrl } from "../../utils/apiUtills";
import { MEDIA_TYPE } from "../../utils/constants";
import httpService from "../../utils/httpService";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { data } = req.body;
    const recentViewedObj = JSON.parse(data);
    const reqArrMovie = [];
    const reqArrTv = [];
    recentViewedObj?.media?.forEach((data) => {
      const url = getMediaDetailsDataAPIUrl(data.type, data.id);
      if (data.type === MEDIA_TYPE.MOVIE) {
        reqArrMovie.push(httpService.get(url));
      } else {
        reqArrTv.push(httpService.get(url));
      }
    });
    const [...movieResp] = await Promise.allSettled(reqArrMovie);
    const [...tvResp] = await Promise.allSettled(reqArrTv);
    res
      .status(200)
      .json({ recentViewed: { movies: [...movieResp], tv: [...tvResp] } });
  } else {
    res.status(200).json({ name: "Moviezine" });
  }
}
