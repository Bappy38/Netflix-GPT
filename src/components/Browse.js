import NavBar from "./NavBar";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import PrimaryBrowseContainer from "./PrimaryBrowseContainer";
import SecondaryBrowseContainer from "./SecondaryBrowseContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const Browse = () => {

    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();

    return (
        <div>
            <NavBar/>
            <PrimaryBrowseContainer/>
            <SecondaryBrowseContainer/>
        </div>
    );
}

export default Browse;