import { IMAGE_BASE_URL } from "../constants/tmdbConstants";

const MovieCard = (props) => {

    const { title, vote_average, poster_path } = props.movie;

    console.log(title, vote_average, poster_path);

    return (
        <div className="w-48 pr-4">
            <img 
                className=""
                src={IMAGE_BASE_URL + poster_path} 
                alt={title}
            />
        </div>
    );
}

export default MovieCard;