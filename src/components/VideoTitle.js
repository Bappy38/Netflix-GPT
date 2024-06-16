import { useSelector } from "react-redux";
import lang from "../constants/languageConstants";

const VideoTitle = (props) => {
    const { title, overview } = props;
    const preferredLang = useSelector((store) => store.config.lang);

    return (
        <div className="w-full aspect-video pt-40 px-16 absolute text-white bg-gradient-to-r from-black">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="text-lg py-6 w-2/5">{overview}</p>

            <div className="">
                <button 
                    className="bg-white text-black rounded-md py-2 px-5 font-semibold hover:bg-opacity-80">
                        ▷ {lang.browse[preferredLang].play}
                </button>
                <button
                    className="mx-2 bg-gray-500 text-white bg-opacity-70 rounded-md py-2 px-5 font-semibold">
                        🛈 {lang.browse[preferredLang].moreInfo}
                </button>
            </div>
        </div>
    );
}

export default VideoTitle;