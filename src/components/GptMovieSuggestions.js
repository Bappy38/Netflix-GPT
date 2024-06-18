import { useSelector } from "react-redux";
import MovieList from "../components/MovieList";
import MovieListShimmer from "./MovieListShimmer";

const GPTMovieSuggestions = () => {

    const { gptSearchQuery, gptSearchResult, gptSuggestedMovies } = useSelector((store) => store.gpt);

    if (!gptSearchQuery)
        return;

    if (!gptSearchResult || gptSearchResult.length === 0) {

        return (
            <div className="p-4 m-4 bg-black bg-opacity-80">
                <MovieListShimmer/>
            </div>
        )
    }

    return (
        (
            <div className="p-4 m-4 bg-black bg-opacity-80">
                {
                    gptSearchResult.map((movieName, index) => (
                        <MovieList
                            key={movieName}
                            title={movieName}
                            movies={gptSuggestedMovies[index]}
                        />
                    ))
                }
            </div>
        )
    );
}

export default GPTMovieSuggestions;