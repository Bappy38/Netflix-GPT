export const API_KEY = "a7f95ad3215041994a91283d05a2b125";

export const NOW_PLAYING_MOVIES_API = "https://api.themoviedb.org/3/movie/now_playing?page=PAGE_NO&api_key=API_KEY";
export const POPULAR_MOVIES_API = "https://api.themoviedb.org/3/movie/popular?page=PAGE_NO&api_key=API_KEY";
export const TOP_RATED_MOVIES_API = "https://api.themoviedb.org/3/movie/top_rated?page=PAGE_NO&api_key=API_KEY";
export const UPCOMING_MOVIES_API = "https://api.themoviedb.org/3/movie/upcoming?page=PAGE_NO&api_key=API_KEY";
export const MOVIE_CLIPS_API = "https://api.themoviedb.org/3/movie/MOVIE_ID/videos?api_key=API_KEY";
export const MOVIE_SEARCH_API = "https://api.themoviedb.org/3/search/movie?query=QUERY&include_adult=false&page=PAGE_NO&api_key=API_KEY";

export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500/";

export const API_OPTIONS = 
{
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhN2Y5NWFkMzIxNTA0MTk5NGE5MTI4M2QwNWEyYjEyNSIsInN1YiI6IjY2NmQ4YTllODY5YTI4MWZiZTkwZjFkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hmYLIOj1nLmoA7rHWGQ1g7zEQDyqTQ0IHD2Ek64IorA"
    }
};

export const PAGE_NO_PLACEHOLDER = "PAGE_NO";
export const API_KEY_PLACEHOLDER = "API_KEY";
export const QUERY_PLACEHOLDER = "QUERY";