import React from "react";
import { getAnimeUrl } from "../../utils/apiUtills";
import AnimeComponent from "../../components/Business/AnimeComponent";
import httpService from "../../utils/httpService";
import { SEO_TAGS } from "../../utils/constants";

const Anime = ({ animeData }) => {
  return <AnimeComponent data={animeData} />;
};
export async function getServerSideProps(context) {
  let url = getAnimeUrl();
  const animeData = await httpService.get(url);

  return {
    props: {
      animeData,
      page: 1,
      title: SEO_TAGS.TV.TITLE,
      description: SEO_TAGS.TV.DESCRIPTION,
      keywords: SEO_TAGS.TV.KEYWORDS,
    },
  };
}
export default Anime;
