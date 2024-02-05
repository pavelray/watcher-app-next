import { MOVIE_CERTIFICATES } from "./certificates/movie";
import { TV_CERTIFICATES } from "./certificates/tv";
import {
  API_IMAGE_URL,
  MEDIA_TYPE,
  MOVIE_GENRE,
  NO_IMG_PLACEHOLDER_MEDIA,
  TV_GENRE,
} from "./constants";
import { v4 as uuid4 } from "uuid";

export const isBrowser = () => process.browser;
const getCookiesFromDoc = () => (isBrowser() ? document.cookie : "");

export const getCookie = (name, cookies) => {
  const allCookies = cookies || getCookiesFromDoc();
  const cookiesList = allCookies.split(";").reduce((acc, cookieString) => {
    const [key, value] = cookieString.trim().split("=");
    return { ...acc, [key]: value };
  }, {});
  return cookiesList[name] || "";
};

export const getAllCookies = (request) => {
  if (process.browser) {
    return document.cookie;
  }
  return request?.headers?.cookie || "";
};

export const setCookie = (name, value, domain, ctx) => {
  const cookieString = `${name}=${value}; path=/; Domain=${domain};`;
  if (isBrowser()) {
    document.cookie = cookieString;
    return;
  }
  const { res } = ctx;
  const previousCookies = res.getHeader("Set-Cookie") || [];
  res.setHeader("Set-Cookie", [...previousCookies, cookieString]);
};

export const removeCookie = (name, value, domain, ctx) => {
  const cookieString = `${name}=${value}; path=/; Domain=${domain}; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
  if (isBrowser()) {
    document.cookie = cookieString;
    return;
  }
  const { res } = ctx;
  const previousCookies = res.getHeader("Set-Cookie") || [];
  res.setHeader("Set-Cookie", [...previousCookies, cookieString]);
};

export const getGenreText = (genres) => {
  return genres.map((n) => n.name).join(" ,");
};

export const getGenre = (genreIds, type) => {
  if (genreIds && type !== MEDIA_TYPE.PERSON) {
    if (type === MEDIA_TYPE.MOVIE) {
      return MOVIE_GENRE.filter((element) => genreIds.includes(element.id))
        .map((g) => g.name)
        .toString();
    }

    return TV_GENRE.filter((element) => genreIds.includes(element.id))
      .map((g) => g.name)
      .toString();
  }
};

export const slugify = (str) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const setLocationInfo = (location) => {
  localStorage.setItem("COUNTRY", location.country);
  localStorage.setItem("STATE", location.state);
};

export const getLocationInfo = () => {
  const countryCode = localStorage?.getItem("COUNTRY");
  const sateCode = localStorage?.getItem("STATE");

  return {
    countryCode,
    sateCode,
  };
};

export const setLocationCookie = (location) => {
  setCookie("COUNTRY", location.country, window.location.hostname);
  setCookie("STATE", location.state, window.location.hostname);
};

export const getLocationCookie = (request) => {
  if (isBrowser()) {
    const countryCode = getCookie("COUNTRY");
    const stateCode = getCookie("STATE");

    return {
      countryCode,
      stateCode,
    };
  }
  const allCookies = getAllCookies(request);
  const countryCode = getCookie("COUNTRY", allCookies);
  const stateCode = getCookie("STATE", allCookies);
  return {
    countryCode,
    stateCode,
  };
};

export const isMobileView = (ctx) => {
  const isMobileView = (
    ctx.req ? ctx.req.headers["user-agent"] : navigator.userAgent
  ).match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i);

  return Boolean(isMobileView);
};

export const getImageUrl = (imageUrl, fullPath) => {
  return imageUrl ? `${fullPath}${imageUrl}` : NO_IMG_PLACEHOLDER_MEDIA;
};

export const getContentRating = (result, type) => {
  switch (type) {
    case MEDIA_TYPE.MOVIE:
      const cert = result?.map((r) => {
        const values = r.release_dates.find((x) => x.certification !== "");
        const certificateValue = MOVIE_CERTIFICATES;
        const meaning = certificateValue[r.iso_3166_1]?.find(
          (cert) => cert.certification === values?.certification
        )?.meaning;
        return {
          ...values,
          iso_3166_1: r.iso_3166_1,
          meaning,
        };
      });
      return cert;
    default: {
      const cert = result?.map((r) => {
        const certificateValue = TV_CERTIFICATES.certifications;
        const meaning = certificateValue[r.iso_3166_1]?.filter(
          (x) => x.certification === r.rating
        )[0].meaning;
        return {
          certification: r.rating,
          iso_3166_1: r.iso_3166_1,
          meaning,
        };
      });
      return cert;
    }
  }
};

export const getCertificates = (releaseInfo, productionCountries, type) => {
  if(!releaseInfo) return;
  const result = releaseInfo?.results?.filter((o1) =>
    productionCountries?.some((o2) => o1.iso_3166_1 === o2.iso_3166_1)
  );
  const selectCertCountry = !!result.length
    ? result
    : releaseInfo.results.filter((x) => x.iso_3166_1 === "US") || [
        ...releaseInfo.results[0],
      ];
  const certificates = getContentRating(selectCertCountry, type);
  return [certificates[0]];
};

export const formatNumber = (number) => {
  return new Intl.NumberFormat().format(number);
};

export const getRuntime = (runtime) => {
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;
  const totalRuntime = `${hours}h ${minutes}m`;
  return totalRuntime;
};

export const getReleaseDate = (details, type) => {
  const releaseDate =
    type === MEDIA_TYPE.MOVIE ? details.release_date : details.first_air_date;

  return new Date(releaseDate).toLocaleDateString();
};

export const getLastAirDate = (details) => {
  const lastAirDate = details.last_air_date || null;

  return lastAirDate === null ? "" : new Date(lastAirDate).toLocaleDateString();
};

export const formatCurrency = (number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    notation: "compact",
    compactDisplay: "long",
  }).format(number);
};

export const getImage = (imagePath) => {
  const imageName = imagePath
    ? `${API_IMAGE_URL}/w200${imagePath}`
    : NO_IMG_PLACEHOLDER_MEDIA;
  return imageName;
};

export const getUid = () => {
  return uuid4();
};

export const getYoutubeThumbnailSrc = (videoKey) => {
  return `https://img.youtube.com/vi/${videoKey}/maxresdefault.jpg`;
};

export const getAge = (birthDate) => {
  if (birthDate && birthDate !== null) {
    const today = new Date();
    birthDate = new Date(birthDate);

    var years = today.getFullYear() - birthDate.getFullYear();

    if (
      today.getMonth() < birthDate.getMonth() ||
      (today.getMonth() == birthDate.getMonth() &&
        today.getDate() < birthDate.getDate())
    ) {
      years--;
    }

    return years;
  }
  return "";
};

export const formatDiscoverFilterData = (filtersStr) => {
  const filterArr = filtersStr.split("&");
  let genre = "";
  let sortBy = "";
  let sortOrder = "";
  let region = "";
  filterArr.forEach((x) => {
    const keyVlaue = x.split("=");
    if (keyVlaue[0] === "with_genres") genre = keyVlaue[1];
    if (keyVlaue[0] === "sort_by") {
      const temp = keyVlaue[1].split(".");
      sortBy = temp[0];
      sortOrder = temp[1];
    }
    if (keyVlaue[0] === "region") region = keyVlaue[1];
  });

  return {
    genre,
    sortBy,
    sortOrder,
    region,
  };
};

export const setRecentWatched = (id, type) => {
  const recentWatched = JSON.parse(localStorage.getItem("recentWatched"));
  if (recentWatched) {
    const storedMediaCount = recentWatched.media.length - 1;
    const mediaIndex = recentWatched.media.findIndex((x) => x.id === id);
    if (storedMediaCount === 10 && mediaIndex === -1) {
      recentWatched.media = recentWatched.media.shift();
    }
    if (mediaIndex === -1) {
      recentWatched.media.push({ id, type });
      localStorage.setItem(
        "recentWatched",
        JSON.stringify({ media: recentWatched.media })
      );
    }
  } else {
    localStorage.setItem("recentWatched", JSON.stringify({ media: [] }));
  }
};
