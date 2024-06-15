import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import BackgroundVideo from "./BackgroundVideo";

const PrimaryBrowseContainer = () => {

    const movies = useSelector(store => store.movies?.nowPlayingMovies);

    if (!movies)
        return;

    const topMovie = movies[2];
    console.log(topMovie);

    const {id, original_title, overview} = topMovie;

    return (
        <div>
            <VideoTitle title={original_title} overview={overview} />
            <BackgroundVideo movieId={id} />
        </div>
    );
}

export default PrimaryBrowseContainer;