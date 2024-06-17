import { useDispatch } from "react-redux"
import { POPULAR_MOVIES_API, TMDB_API_KEY, TMDB_API_OPTIONS } from "../constants/tmdbConstants";
import { useEffect } from "react";
import { addPopularMovies } from "../store/moviesSlice";

const usePopularMovies = () => {
    
    const dispatch = useDispatch();
    const getPopularMovies = async () => {

        const data = await fetch(
            POPULAR_MOVIES_API
                .replace('API_KEY', TMDB_API_KEY)
                .replace('PAGE_NO', '1'),
            TMDB_API_OPTIONS
        );
        const json = await data.json();
        dispatch(addPopularMovies(json.results));
    }

    useEffect(() => {
        getPopularMovies();
    }, []);
}

export default usePopularMovies;