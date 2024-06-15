export const API_KEY = "a7f95ad3215041994a91283d05a2b125";
export const NOW_PLAYING_MOVIES_API = "https://api.themoviedb.org/3/movie/now_playing?page=PAGE_NO&api_key=API_KEY";
export const MOVIE_CLIPS_API = "https://api.themoviedb.org/3/movie/MOVIE_ID/videos?language=en-US&api_key=API_KEY";
export const API_OPTIONS = 
{
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhN2Y5NWFkMzIxNTA0MTk5NGE5MTI4M2QwNWEyYjEyNSIsInN1YiI6IjY2NmQ4YTllODY5YTI4MWZiZTkwZjFkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hmYLIOj1nLmoA7rHWGQ1g7zEQDyqTQ0IHD2Ek64IorA"
    }
};