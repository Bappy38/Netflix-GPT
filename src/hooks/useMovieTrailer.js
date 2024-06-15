import { useEffect } from "react";
import { API_KEY, API_OPTIONS, MOVIE_CLIPS_API } from "../constants/tmdbConstants";
import { useDispatch } from "react-redux";
import { addTopMovieTrailer } from "../store/moviesSlice";

const useMovieTrailer = (movieId) => {

    const dispatch = useDispatch();

    const getMovieTrailer = async () => {

        const data = await fetch(
            MOVIE_CLIPS_API
                .replace('API_KEY', API_KEY)
                .replace('MOVIE_ID', movieId), 
            API_OPTIONS);
        const json = await data.json();

        const trailers = json?.results?.filter(video => video.type === "Trailer");
        const trailer = trailers.length === 0? json.results[0] : trailers[0];

        dispatch(addTopMovieTrailer(trailer));
    }

    useEffect(() => {
        getMovieTrailer();
    }, []);
}

export default useMovieTrailer;