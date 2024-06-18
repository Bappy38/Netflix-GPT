import { useSelector } from "react-redux";
import lang from "../constants/languageConstants";
import { useRef } from "react";
import useGptSearch from "../hooks/useGptSearch";


const GPTSearchBar = () => {

    const preferredLang = useSelector((store) => store.config.lang);
    const searchText = useRef(null);

    const { handleGptSearchQuery } = useGptSearch();

    return (
        <div className="pt-[10%] flex justify-center">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleGptSearchQuery(searchText.current.value);
                }}
                className="w-1/2 bg-black grid grid-cols-12">
                <input
                    ref={searchText}
                    type="text" 
                    placeholder={lang.gptSearch[preferredLang].gptSearchBarPlaceholder}
                    className="p-3 m-3 col-span-9 rounded-md"
                />

                <button
                    type="submit"
                    onClick={handleGptSearchQuery}
                    className="
                        p-2 m-3
                        bg-red-700 
                        text-white 
                        font-bold 
                        rounded-md
                        col-span-3"
                >
                    {lang.gptSearch[preferredLang].search} TEST
                </button>
            </form>
        </div>
    );
}

export default GPTSearchBar;