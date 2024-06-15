
const VideoTitle = (props) => {
    const { title, overview } = props;

    return (
        <div className="w-screen aspect-video pt-40 px-16 absolute text-white bg-gradient-to-r from-black">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="text-lg py-6 w-2/5">{overview}</p>

            <div className="">
                <button 
                    className="bg-white text-black rounded-md py-2 px-5 font-semibold hover:bg-opacity-80">
                        ▷ Play
                </button>
                <button
                    className="mx-2 bg-gray-500 text-white bg-opacity-70 rounded-md py-2 px-5 font-semibold">
                        🛈 More Info
                </button>
            </div>
        </div>
    );
}

export default VideoTitle;