import {
  MEDIA_TYPE,
  MOVIE_CERTIFICATES,
  MOVIE_GENRE,
  NO_IMG_PLACEHOLDER_MEDIA,
  TV_GENRE,
} from "./constants";

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
  localStorage.setItem("COUNTRY_CODE", location.country_code);
  localStorage.setItem("COUNTRY_NAME", location.country_name);
};

export const getLocationInfo = () => {
  const countryCode = localStorage?.getItem("COUNTRY_CODE");
  const countryName = localStorage?.getItem("COUNTRY_NAME");

  return {
    countryCode,
    countryName,
  };
};

export const setLocationCookie = (location) => {
  setCookie("COUNTRY_CODE", location.country_code, window.location.hostname);
  setCookie("COUNTRY_NAME", location.country_name, window.location.hostname);
};

export const getLocationCookie = (request) => {
  if (isBrowser()) {
    const countryCode = getCookie("COUNTRY_CODE");
    const countryName = getCookie("COUNTRY_NAME");

    return {
      countryCode,
      countryName,
    };
  }
  const allCookies = getAllCookies(request);
  const countryCode = getCookie("COUNTRY_CODE", allCookies);
  const countryName = getCookie("COUNTRY_NAME", allCookies);
  return {
    countryCode,
    countryName,
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
        const meaning = MOVIE_CERTIFICATES[r.iso_3166_1].find(
          (cert) => cert.certification === values.certification
        ).meaning;
        return {
          ...values,
          iso_3166_1: r.iso_3166_1,
          meaning,
        };
      });

      return cert;
    default: {
      return result?.map((r) => r.rating).join(", ");
    }
  }
};

export const getCertificates = (releaseInfo, productionCountries, type) => {
  const result = releaseInfo?.results?.filter((o1) =>
    productionCountries?.some((o2) => o1.iso_3166_1 === o2.iso_3166_1)
  );

  const certificates = getContentRating(result, type);
  return certificates;
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
