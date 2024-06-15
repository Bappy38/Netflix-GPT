import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const BackgroundVideo = (props) => {
    const { movieId } = props;
    const topMovieTrailer = useSelector(store => store.movies?.topMovieTrailer);

    useMovieTrailer(movieId);

    if (!topMovieTrailer)
        return;

    return (
        <div className=''>
            <iframe
                className='w-screen aspect-video'
                src={"https://www.youtube.com/embed/" + topMovieTrailer?.key + "?autoplay=1&mute=1"}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
        </div>
    );
}

export default BackgroundVideo;