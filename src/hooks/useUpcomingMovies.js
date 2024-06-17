import { useDispatch } from "react-redux"
import { TMDB_API_KEY, TMDB_API_OPTIONS, UPCOMING_MOVIES_API } from "../constants/tmdbConstants";
import { addUpcomingMovies } from "../store/moviesSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {

    const dispatch = useDispatch();
    const getUpcomingMovies = async () => {

        const data = await fetch(
            UPCOMING_MOVIES_API
                .replace('API_KEY', TMDB_API_KEY)
                .replace('PAGE_NO', '1'),
            TMDB_API_OPTIONS
        );
        const json = await data.json();
        dispatch(addUpcomingMovies(json.results));
    }

    useEffect(() => {
        getUpcomingMovies();
    }, []);
}

export default useUpcomingMovies;