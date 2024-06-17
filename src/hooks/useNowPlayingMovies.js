import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../store/moviesSlice";
import { useEffect } from "react";
import { NOW_PLAYING_MOVIES_API, TMDB_API_KEY, TMDB_API_OPTIONS } from "../constants/tmdbConstants";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const getNowPlayingMovies = async () => {

        const data = await fetch(
            NOW_PLAYING_MOVIES_API
                .replace('API_KEY', TMDB_API_KEY)
                .replace('PAGE_NO', '1'),
            TMDB_API_OPTIONS
        );
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results));
    }

    useEffect(() => {
        getNowPlayingMovies();
    }, []);
}

export default useNowPlayingMovies;