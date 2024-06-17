import { BANNER } from "../constants/appConstants";
import GPTMovieSuggestions from "./GptMovieSuggestions";
import GPTSearchBar from "./GptSearchBar";

const GPTSearchContainer = () => {

    return (
        <div className="">
            <div className="fixed -z-10">
                <img
                    src={ BANNER }
                    alt="background"/>
            </div>
            <GPTSearchBar/>
            <GPTMovieSuggestions/>
        </div>
    );
}

export default GPTSearchContainer;