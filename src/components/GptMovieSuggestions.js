import { useSelector } from "react-redux";
import MovieList from "../components/MovieList";

const GPTMovieSuggestions = () => {

    const { gptSearchResult, gptSuggestedMovies } = useSelector((store) => store.gpt);

    console.log(gptSearchResult);
    console.log(gptSuggestedMovies);

    if (!gptSearchResult || gptSearchResult.length === 0)
        return;

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