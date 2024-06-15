import NavBar from "./NavBar";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

const Browse = () => {

    useNowPlayingMovies();

    return (
        <div>
            <NavBar/>
        </div>
    );
}

export default Browse;