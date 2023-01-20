export const MOVIE_GENRE = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
];

export const TV_GENRE = [
  {
    id: 10759,
    name: "Action & Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 10762,
    name: "Kids",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10763,
    name: "News",
  },
  {
    id: 10764,
    name: "Reality",
  },
  {
    id: 10765,
    name: "Sci-Fi & Fantasy",
  },
  {
    id: 10766,
    name: "Soap",
  },
  {
    id: 10767,
    name: "Talk",
  },
  {
    id: 10768,
    name: "War & Politics",
  },
  {
    id: 37,
    name: "Western",
  },
];


export const MEDIA_TYPE = {
  ALL: "all",
  MOVIE: "movie",
  TV_SERIES: "tv",
  PERSON: "person",
};

export const CREDIT_TYPE = {
  CAST: "cast",
  CREW: "crew",
};

export const TIME_TYPE = {
  WEEK: "week",
  DAY: "day",
};

export const GENDER = {
  1: "Female",
  2: "Male",
};

export const COLLECTION_TYPE = {
  TOP_RATED: "top_rated",
  POPULAR: "popular",
  UP_COMING: "upcoming",
  NOW_PLAYING: "now_playing",
  SIMILAR: "similar",
  TRENDING: "trending",
  RECOMENDED: "recomended",
};

export const VIDEO_TYPE = {
  TRAILER: "Trailer",
};

export const ERROR_MESSAGE = {
  PAGE_NOT_FOUND: "Opps! You are looking for a wrong page.",
  SERVER_ERROR: "Opps! some error occoured. Please try again later.",
};

export const APP_NAME = "The Film Mastery";
export const SITE_NAME = "https://thefilmmastery.com";

export const DEFAULT_COUNTRY_CODE = "US";
export const DEFAULT_COUNTRY_NAME = "United States";

export const API_VERSION = 3;
export const API_BASE_URL = `https://api.themoviedb.org/${API_VERSION}`;
export const API_IMAGE_URL = "https://image.tmdb.org/t/p";
export const API_LOCATION_URL = `https://geolocation-db.com/json/`;
export const NO_IMG_PLACEHOLDER_USER = `/images/profile-placeholder.jpeg`;
export const NO_IMG_PLACEHOLDER_MEDIA = `/images/media-placeholder.png`;
export const IMDB_IMAGE_PATH = `/images/imdb-icon.png`;
export const IMDB_LOCATION_URL = "https://www.imdb.com/title";
export const IMDB_PERSON_LOCATION_URL = "https://www.imdb.com/name";
export const FACEBOOK_IMAGE_PATH = `/images/facebook_logo_icon.png`;
export const FACEBOOK_PERSON_LOCATION_URL = "https://www.facebook.com";
export const INSTAGRAM_IMAGE_PATH = `/images/instagram_logo_icon.png`;
export const INSTAGRAM_PERSON_LOCATION_URL = "https://www.instagram.com";
export const TWITTER_IMAGE_PATH = `/images/twitter_logo_icon.png`;
export const TWITTER_PERSON_LOCATION_URL = "https://twitter.com";

export const pageLayoutStyle = {};

export const pageMobileLayoutStyle = {
  margin: "0px 20px",
};

export const movieDetailsStyle = {
  backgroundAttachment: "fixed",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

export const appendToReq =
  "&append_to_response=videos,credits,images,external_ids,content_ratings,release_dates,media_type&include_image_language=en";
export const appendToReqPerson = "&append_to_response=images,combined_credits,external_ids&include_image_language=en";

// Youtube - https://www.googleapis.com/youtube/v3/videos?key=YOUR_API_KEY&part=snippet&id=VIDEO_ID - to get image thumbnail
//