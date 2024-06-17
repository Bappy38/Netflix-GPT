import { useDispatch } from "react-redux";
import { API_KEY, API_KEY_PLACEHOLDER, API_OPTIONS, MOVIE_SEARCH_API, PAGE_NO_PLACEHOLDER, QUERY_PLACEHOLDER } from "../constants/tmdbConstants";
import { updateGptSearchResult } from "../store/gptSlice";
import openai from "../utils/openai";


const useGptSearch = () => {

    const dispatch = useDispatch();

    const handleGptSearchQuery = async (searchQuery) => {

        try {
            // const searchResult = await getGptSearchResult(searchQuery);
            const dummyResult = "Andaz Apna Apna, Hera Pheri, Chupke Chupke, Welcome, De Dana Dan";
            const movieNames = dummyResult.split(",");
            
            const promises = movieNames.map((movieName) => searchMovieInTMDB(movieName));
            const tmdbResults = await Promise.all(promises);

            dispatch(updateGptSearchResult({
                gptSearchResult: movieNames,
                gptSuggestedMovies: tmdbResults
            }));
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    const searchMovieInTMDB = async (movieName) => {

        const data = await fetch(
            MOVIE_SEARCH_API
                .replace(PAGE_NO_PLACEHOLDER, '1')
                .replace(API_KEY_PLACEHOLDER, API_KEY)
                .replace(QUERY_PLACEHOLDER, movieName),
            API_OPTIONS
        );
        const json = await data.json();
        return json.results;
    };

    const getGptSearchResult = async (query) => {

        const gptQuery = "Act as a Movie Recommendation System and suggest some movies for the query: " + query + "Only give me 5 comma separated movie names, Not even formal common sentences you write ususally.";

        const gptResults = await openai.chat.completions.create({
            messages: [{ role: "user", content: gptQuery }],
            model: "gpt-3.5-turbo"
        });

        if (!gptResults.choices || gptResults.choices.length === 0) {

            throw new Error("No valid choices returned from GPT");
        }
        return gptResults?.choices?.[0]?.message?.content;
    };

    return {handleGptSearchQuery};
}

export default useGptSearch;