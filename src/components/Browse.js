import NavBar from "./NavBar";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import PrimaryBrowseContainer from "./PrimaryBrowseContainer";
import SecondaryBrowseContainer from "./SecondaryBrowseContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import { useSelector } from "react-redux";
import GPTSearchContainer from "./GptSearchContainer";

const Browse = () => {

    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();

    const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

    return (
        <div>
            <NavBar/>
            {
                showGptSearch?
                (
                    <GPTSearchContainer/>
                )
                :
                (
                    <>
                        <PrimaryBrowseContainer/>
                        <SecondaryBrowseContainer/>
                    </>
                )
            }
            
        </div>
    );
}

export default Browse;