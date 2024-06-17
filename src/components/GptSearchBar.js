import { useSelector } from "react-redux";
import lang from "../constants/languageConstants";


const GPTSearchBar = () => {

    const preferredLang = useSelector((store) => store.config.lang);

    return (
        <div className="pt-[10%] flex justify-center">
            <form className="w-1/2 bg-black grid grid-cols-12">
                <input 
                    type="text" 
                    placeholder={lang.gptSearch[preferredLang].gptSearchBarPlaceholder}
                    className="p-3 m-3 col-span-9 rounded-md"
                />

                <button
                    className="
                        p-2 m-3
                        bg-red-700 
                        text-white 
                        font-bold 
                        rounded-md
                        col-span-3"
                >
                    {lang.gptSearch[preferredLang].search}
                </button>
            </form>
        </div>
    );
}

export default GPTSearchBar;