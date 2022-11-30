export const MOVIE_GENRE = [
    {
      id: 28,
      name: "Action"
    },
    {
      id: 12,
      name: "Adventure"
    },
    {
      id: 16,
      name: "Animation"
    },
    {
      id: 35,
      name: "Comedy"
    },
    {
      id: 80,
      name: "Crime"
    },
    {
      id: 99,
      name: "Documentary"
    },
    {
      id: 18,
      name: "Drama"
    },
    {
      id: 10751,
      name: "Family"
    },
    {
      id: 14,
      name: "Fantasy"
    },
    {
      id: 36,
      name: "History"
    },
    {
      id: 27,
      name: "Horror"
    },
    {
      id: 10402,
      name: "Music"
    },
    {
      id: 9648,
      name: "Mystery"
    },
    {
      id: 10749,
      name: "Romance"
    },
    {
      id: 878,
      name: "Science Fiction"
    },
    {
      id: 10770,
      name: "TV Movie"
    },
    {
      id: 53,
      name: "Thriller"
    },
    {
      id: 10752,
      name: "War"
    },
    {
      id: 37,
      name: "Western"
    }
];

export const TV_GENRE = [
  {
      "id": 10759,
      "name": "Action & Adventure"
  },
  {
      "id": 16,
      "name": "Animation"
  },
  {
      "id": 35,
      "name": "Comedy"
  },
  {
      "id": 80,
      "name": "Crime"
  },
  {
      "id": 99,
      "name": "Documentary"
  },
  {
      "id": 18,
      "name": "Drama"
  },
  {
      "id": 10751,
      "name": "Family"
  },
  {
      "id": 10762,
      "name": "Kids"
  },
  {
      "id": 9648,
      "name": "Mystery"
  },
  {
      "id": 10763,
      "name": "News"
  },
  {
      "id": 10764,
      "name": "Reality"
  },
  {
      "id": 10765,
      "name": "Sci-Fi & Fantasy"
  },
  {
      "id": 10766,
      "name": "Soap"
  },
  {
      "id": 10767,
      "name": "Talk"
  },
  {
      "id": 10768,
      "name": "War & Politics"
  },
  {
      "id": 37,
      "name": "Western"
  }
]

export const MEDIA_TYPE = {
    MOVIE: 'movie',
    TV_SERIES: 'tv',
    PERSON: 'person'
}

export const CREDIT_TYPE = {
  CAST: 'cast',
  CREW: 'crew'
}

export const TIME_TYPE = {
  WEEK:'week',
  DAY: 'day'
}

export const COLLECTION_TYPE = {
  TOP_RATED: 'top_rated',
  POPULAR: 'popular',
  UP_COMING: 'upcoming',
  NOW_PLAYING: 'now_playing',
  SIMILAR: 'similar',
  TRENDING: 'trending'
}

export const VIDEO_TYPE = {
  TRAILER: 'Trailer'
}

export const ERROR_MESSAGE = {
  PAGE_NOT_FOUND: 'Opps! You are looking for a wrong page.',
  SERVER_ERROR: 'Opps! some error occoured. Please try again later.'
}

export const APP_NAME = 'Moviezine';

export const DEFAULT_COUNTRY_CODE = 'US';
export const DEFAULT_COUNTRY_NAME = 'United States';

export const API_VERSION = 3;
export const API_BASE_URL = `https://api.themoviedb.org/${API_VERSION}`;
export const API_IMAGE_URL = 'https://image.tmdb.org/t/p';
export const API_LOCATION_URL = `https://geolocation-db.com/json/`;
export const NO_IMG_PLACEHOLDER_USER = `/images/profile-placeholder.jpeg`;
export const NO_IMG_PLACEHOLDER_MEDIA = `/images/media-placeholder.png`;
export const IMDB_IMAGE_PATH = `/images/imdb-icon.png`;
export const IMDB_LOCATION_URL = 'https://www.imdb.com/title';

export const pageLayoutStyle = {
  margin: "0px 180px"
}