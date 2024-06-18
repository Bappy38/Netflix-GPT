import MovieCardShimmer from "./MovieCardShimmer";


const MovieListShimmer = () => {

    return (
        <div className="px-6 mt-10">
            <div className="h-10 w-44 bg-gray-300 rounded-md opacity-60 animate-pulse"></div>
            <div className="pt-2 flex overflow-x-scroll">
                <div className="flex">
                    <MovieCardShimmer/>
                    <MovieCardShimmer/>
                    <MovieCardShimmer/>
                    <MovieCardShimmer/>
                    <MovieCardShimmer/>
                    <MovieCardShimmer/>
                </div>
            </div>
        </div>
    );
}

export default MovieListShimmer;