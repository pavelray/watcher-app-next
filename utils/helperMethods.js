import { MEDIA_TYPE, MOVIE_GENRE, TV_GENRE } from "./constants";



export const getGenre = (media, type) => {
    if (type === MEDIA_TYPE.MOVIE) {
        return MOVIE_GENRE.filter((element) =>
            media.genre_ids.includes(element.id)
        )
            .map((g) => g.name)
            .toString();
    }

    return TV_GENRE.filter((element) =>
        media.genre_ids.includes(element.id)
    )
        .map((g) => g.name)
        .toString();
};

export const slugify = str =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');