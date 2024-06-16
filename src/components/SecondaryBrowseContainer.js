import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryBrowseContainer = () => {

    const movies = useSelector((store) => store.movies);

    return (
        <div className="bg-black">
            <div className="-mt-52 relative z-20">
                <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies}/>
                <MovieList title={"Trending"} movies={movies?.nowPlayingMovies}/>
                <MovieList title={"Popular"} movies={movies?.nowPlayingMovies}/>
                <MovieList title={"Upcoming"} movies={movies?.nowPlayingMovies}/>
            </div>
        </div>
    );
}

export default SecondaryBrowseContainer;