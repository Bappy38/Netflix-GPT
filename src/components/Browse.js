import NavBar from "./NavBar";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import PrimaryBrowseContainer from "./PrimaryBrowseContainer";
import SecondaryBrowseContainer from "./SecondaryBrowseContainer";

const Browse = () => {

    useNowPlayingMovies();

    return (
        <div>
            <NavBar/>
            <PrimaryBrowseContainer/>
            <SecondaryBrowseContainer/>
        </div>
    );
}

export default Browse;