import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../store/moviesSlice";
import { useEffect } from "react";
import { API_KEY, API_OPTIONS, NOW_PLAYING_MOVIES_API } from "../constants/tmdbConstants";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const getNowPlayingMovies = async () => {

        const data = await fetch(
            NOW_PLAYING_MOVIES_API
                .replace('API_KEY', API_KEY)
                .replace('PAGE_NO', '1'),
            API_OPTIONS
        );
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results));
    }

    useEffect(() => {
        getNowPlayingMovies();
    }, []);
}

export default useNowPlayingMovies;