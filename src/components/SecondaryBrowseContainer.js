import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryBrowseContainer = () => {
    
    const movies = useSelector((store) => store.movies);

    return (
        <div className="bg-black">
            <div className="-mt-52 relative z-20">
                <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies}/>
                <MovieList title={"Popular"} movies={movies?.popularMovies}/>
                <MovieList title={"Top Rated"} movies={movies?.topRatedMovies}/>
                <MovieList title={"Upcoming"} movies={movies?.upcomingMovies}/>
            </div>
        </div>
    );
}

export default SecondaryBrowseContainer;