import { useDispatch } from "react-redux"
import { API_KEY, API_OPTIONS, POPULAR_MOVIES_API } from "../constants/tmdbConstants";
import { useEffect } from "react";
import { addPopularMovies } from "../store/moviesSlice";

const usePopularMovies = () => {
    
    const dispatch = useDispatch();
    const getPopularMovies = async () => {

        const data = await fetch(
            POPULAR_MOVIES_API
                .replace('API_KEY', API_KEY)
                .replace('PAGE_NO', '1'),
            API_OPTIONS
        );
        const json = await data.json();
        dispatch(addPopularMovies(json.results));
    }

    useEffect(() => {
        getPopularMovies();
    }, []);
}

export default usePopularMovies;