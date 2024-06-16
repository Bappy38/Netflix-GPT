import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import lang from "../constants/languageConstants";

const SecondaryBrowseContainer = () => {
    
    const preferredLang = useSelector((store) => store.config.lang);
    const movies = useSelector((store) => store.movies);

    return (
        <div className="bg-black">
            <div className="-mt-52 relative z-20">
                <MovieList title={lang.browse[preferredLang].nowPlaying} movies={movies?.nowPlayingMovies}/>
                <MovieList title={lang.browse[preferredLang].popular} movies={movies?.popularMovies}/>
                <MovieList title={lang.browse[preferredLang].topRated} movies={movies?.topRatedMovies}/>
                <MovieList title={lang.browse[preferredLang].upcoming} movies={movies?.upcomingMovies}/>
            </div>
        </div>
    );
}

export default SecondaryBrowseContainer;