import { API_BASE_URL, MEDIA_TYPE } from "./constants";
import axios from 'axios'

export const fetcher = url => axios.get(url).then(res => res.data);

/**
 * 
 * @param {MEDIA_TYPE} type 
 * @param {TIME_TYPE} timeWindow 
 * @returns trending tv/movie/persion
 */
export const getTrendingDataAPIUrl = (type, timeWindow) => {
    return `${API_BASE_URL}/trending/${type}/${timeWindow}?api_key=${process.env.NEXT_PUBLIC_TMD_API_KEY}` 
}

export const getSimilarDataAPIUrl = (type, id) => {
    switch(type){
        case MEDIA_TYPE.MOVIE: {
            return `${API_BASE_URL}/movie/${id}/similar?api_key=${process.env.NEXT_PUBLIC_TMD_API_KEY}&language=en-US&page=1`
        }
        case MEDIA_TYPE.TV_SERIES: {
            return `${API_BASE_URL}/tv/${id}/similar?api_key=${process.env.NEXT_PUBLIC_TMD_API_KEY}&language=en-US&page=1`
        }
        default: {
            return ''
        }
    }
}

export const getMovieDetailsDataAPIUrl = (type, id) => {
    switch(type){
        case MEDIA_TYPE.MOVIE: {
            return `${API_BASE_URL}/movie/${id}?api_key=${process.env.NEXT_PUBLIC_TMD_API_KEY}`
        }
        case MEDIA_TYPE.TV_SERIES: {
            return `${API_BASE_URL}/tv/${id}?api_key=${process.env.NEXT_PUBLIC_TMD_API_KEY}`
        }
        default: {
            return ''
        }
    }
}

export const getMovieCastDetailsDataAPIUrl = (type, id) => {
    switch(type){
        case MEDIA_TYPE.MOVIE: {
            return `${API_BASE_URL}/movie/${id}/credits?api_key=${process.env.NEXT_PUBLIC_TMD_API_KEY}`
        }
        case MEDIA_TYPE.TV_SERIES: {
            return `${API_BASE_URL}/tv/${id}/credits?api_key=${process.env.NEXT_PUBLIC_TMD_API_KEY}`
        }
        default: {
            return ''
        }
    }
}

export const getProvidersAPIUrl = (type, id) => {
    switch(type){
        case MEDIA_TYPE.MOVIE: {
            return `${API_BASE_URL}/movie/${id}/watch/providers?api_key=${process.env.NEXT_PUBLIC_TMD_API_KEY}`
        }
        case MEDIA_TYPE.TV_SERIES: {
            return `${API_BASE_URL}/tv/${id}/watch/providers?api_key=${process.env.NEXT_PUBLIC_TMD_API_KEY}`
        }
        default: {
            return ''
        }
    }
}

export const getAllCountriesAPIUrl = () => {
    return `${API_BASE_URL}/configuration/countries?api_key=${process.env.NEXT_PUBLIC_TMD_API_KEY}`
}

export const getSearchUrl = (query, page=1) => {
    return `${API_BASE_URL}/search/multi?api_key=${process.env.NEXT_PUBLIC_TMD_API_KEY}&language=en-US&query=${query}&page=${page}`
}

export const getSeasonDetailsAPIUrl = (id, seasonNo) => {
    return `${API_BASE_URL}/tv/${id}/season/${seasonNo}?api_key=${process.env.NEXT_PUBLIC_TMD_API_KEY}&language=en-US`
} 

/**
 *  Get now playing movies in theatres
 *  You can optionally specify a region prameter which will 
 *  narrow the search to only look for theatrical 
 *  release dates within the specified country
 * */
export const getNowPlayingMoviesUrl = () => {
    return `${API_BASE_URL}/movie/now_playing?api_key=${process.env.NEXT_PUBLIC_TMD_API_KEY}&language=en-US&page=1&region=IN`
}

// Get upcoming movies to release in theatres
// Region optional params for specific country
export const getUpcomingMoviesUrl = () => {
    return `${API_BASE_URL}/movie/upcoming?api_key=${process.env.NEXT_PUBLIC_TMD_API_KEY}&language=en-US&page=1`
}


// Get top rated movies in TMDB
export const getTopRatedMoviesUrl = (type=MEDIA_TYPE.MOVIE, pageNo=1) => {
    return `${API_BASE_URL}/${type}/top_rated?api_key=${process.env.NEXT_PUBLIC_TMD_API_KEY}&language=en-US&page=${pageNo}`
}

// Get popular movies in TMDB
export const getPopularMoviesUrl = (type=MEDIA_TYPE.MOVIE, pageNo=1) => {
    return `${API_BASE_URL}/${type}/popular?api_key=${process.env.NEXT_PUBLIC_TMD_API_KEY}&language=en-US&page=${pageNo}`
}

// This will return the latest created movie in TMDB
export const getLatestMoviesUrl = (type=MEDIA_TYPE.MOVIE, pageNo=1) => {
    return `${API_BASE_URL}/movie/latest?api_key=${process.env.NEXT_PUBLIC_TMD_API_KEY}&language=en-US&page=${pageNo}`
}

export const getViewAllUrl = (dataType, type=MEDIA_TYPE.MOVIE, pageNo=1) => {
    return `${API_BASE_URL}/${type}/${dataType}?api_key=${process.env.NEXT_PUBLIC_TMD_API_KEY}&language=en-US&page=${pageNo}`
}

export const getMovieVideosUrl = (id, type) => {
    switch(type){
        case MEDIA_TYPE.MOVIE: {
            return `${API_BASE_URL}/movie/${id}/videos?api_key=${process.env.NEXT_PUBLIC_TMD_API_KEY}&language=en-US`
        }
        case MEDIA_TYPE.TV_SERIES: {
            return `${API_BASE_URL}/tv/${id}/videos?api_key=${process.env.NEXT_PUBLIC_TMD_API_KEY}&language=en-US`
        }
        default: {
            return ''
        }
    }
}