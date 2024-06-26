import { useDispatch } from "react-redux";
import { TMDB_API_KEY, TMDB_API_OPTIONS, TOP_RATED_MOVIES_API } from "../constants/tmdbConstants"
import { addTopRatedMovies } from "../store/moviesSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {

    const dispatch = useDispatch();
    const getTopRatedMovies = async () => {

        const data = await fetch(
            TOP_RATED_MOVIES_API
                .replace('API_KEY', TMDB_API_KEY)
                .replace('PAGE_NO', '1'),
            TMDB_API_OPTIONS
        );
        const json = await data.json();
        dispatch(addTopRatedMovies(json.results));
    }

    useEffect(() => {
        getTopRatedMovies();
    }, []);
}

export default useTopRatedMovies;