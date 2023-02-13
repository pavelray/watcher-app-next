export const MOVIE_GENRE = [
  {
    id: 28,
    name: "Action",
    imageSrc: "/icons/genre/action.png",
  },
  {
    id: 12,
    name: "Adventure",
    imageSrc: "/icons/genre/adventure.png",
  },
  {
    id: 16,
    name: "Animation",
    imageSrc: "/icons/genre/animation.png",
  },
  {
    id: 35,
    name: "Comedy",
    imageSrc: "/icons/genre/comedy.png",
  },
  {
    id: 80,
    name: "Crime",
    imageSrc: "/icons/genre/crime.png",
  },
  {
    id: 99,
    name: "Documentary",
    imageSrc: "/icons/genre/documentary.png",
  },
  {
    id: 18,
    name: "Drama",
    imageSrc: "/icons/genre/drama.png",
  },
  {
    id: 10751,
    name: "Family",
    imageSrc: "/icons/genre/family.png",
  },
  {
    id: 14,
    name: "Fantasy",
    imageSrc: "/icons/genre/fantasy.png",
  },
  {
    id: 36,
    name: "History",
    imageSrc: "/icons/genre/history.png",
  },
  {
    id: 27,
    name: "Horror",
    imageSrc: "/icons/genre/horror.png",
  },
  {
    id: 10402,
    name: "Music",
    imageSrc: "/icons/genre/musical.png",
  },
  {
    id: 9648,
    name: "Mystery",
    imageSrc: "/icons/genre/mystery.png",
  },
  {
    id: 10749,
    name: "Romance",
    imageSrc: "/icons/genre/romance.png",
  },
  {
    id: 878,
    name: "Science Fiction",
    imageSrc: "/icons/genre/science-fiction.png",
  },
  {
    id: 10770,
    name: "TV Movie",
    imageSrc: "/icons/genre/tv-movie.png",
  },
  {
    id: 53,
    name: "Thriller",
    imageSrc: "/icons/genre/thriller.png",
  },
  {
    id: 10752,
    name: "War",
    imageSrc: "/icons/genre/war.png",
  },
  {
    id: 37,
    name: "Western",
    imageSrc: "/icons/genre/western.png",
  },
];

export const TV_GENRE = [
  {
    id: 10759,
    name: "Action & Adventure",
    imageSrc: "/icons/genre/adventure.png",
  },
  {
    id: 16,
    name: "Animation",
    imageSrc: "/icons/genre/animation.png",
  },
  {
    id: 35,
    name: "Comedy",
    imageSrc: "/icons/genre/comedy.png",
  },
  {
    id: 80,
    name: "Crime",
    imageSrc: "/icons/genre/crime.png",
  },
  {
    id: 99,
    name: "Documentary",
    imageSrc: "/icons/genre/documentary.png",
  },
  {
    id: 18,
    name: "Drama",
    imageSrc: "/icons/genre/drama.png",
  },
  {
    id: 10751,
    name: "Family",
    imageSrc: "/icons/genre/family.png",
  },
  {
    id: 10762,
    name: "Kids",
    imageSrc: "/icons/genre/kids.png",
  },
  {
    id: 9648,
    name: "Mystery",
    imageSrc: "/icons/genre/mystery.png",
  },
  {
    id: 10763,
    name: "News",
    imageSrc: "/icons/genre/news.png",
  },
  {
    id: 10764,
    name: "Reality",
    imageSrc: "/icons/genre/reality.png",
  },
  {
    id: 10765,
    name: "Sci-Fi & Fantasy",
    imageSrc: "/icons/genre/fantasy.png",
  },
  {
    id: 10766,
    name: "Soap",
    imageSrc: "/icons/genre/soap.png",
  },
  {
    id: 10767,
    name: "Talk",
    imageSrc: "/icons/genre/talk.png",
  },
  {
    id: 10768,
    name: "War & Politics",
    imageSrc: "/icons/genre/war.png",
  },
  {
    id: 37,
    name: "Western",
    imageSrc: "/icons/genre/western.png",
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
export const LOGO_IMAGE_PATH = "/images/tfm_logo.png";

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
export const appendToReqPerson =
  "&append_to_response=images,combined_credits,external_ids&include_image_language=en";

// Youtube - https://www.googleapis.com/youtube/v3/videos?key=YOUR_API_KEY&part=snippet&id=VIDEO_ID - to get image thumbnail
//


export const SEO_TAGS = {
  DEFAULT: {
    TITLE: "Trending Movies | Tv Series | Person",
    DESCRIPTION:
      "Stay updated with the trending movies, tv series in our website. Find details, trailers, and reviews for new and popular movies and tv series.",
    KEYWORDS:
      "movies, upcoming , theater, showtimes, trailers, reviews, popular movies, popular tv showes, on air tv showes, upcoming tv series.",
  },
  TV: {
    TITLE: "Top Rated Tv Series| Popular Tv Series | Upcoming Tv Series | On Air Shows",
    DESCRIPTION:
      "Stay updated with the trending Tv Series, latest releases and upcoming Tv Series at our website. Find details, trailers, and reviews for new and popular Tv Series.",
    KEYWORDS:
      "tv series releases, upcoming tv series, on air, showtimes, trailers, reviews, popular tv series",
  },
  ABOUT:{
    TITLE: `About | ${APP_NAME}`,
  },
  ALL:{
    TITLE: `All | Cast| Actors| Actress | ${APP_NAME}`,
  }
};

export const PROVIDER = {
  Hotstar: 'https://www.hotstar.com/',
  Netflix: 'https://www.netflix.com/',
  PrimeVideos: ''
}
