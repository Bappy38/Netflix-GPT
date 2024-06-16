import MovieCard from "./MovieCard";

const MovieList = ({title, movies}) => {

    if (!movies)
        return;

    console.log(movies);

    return (
        <div className="px-6">
            <h1 className="text-2xl py-2 text-white">{title}</h1>
            <div className="flex overflow-x-scroll">
                <div className="flex">
                    {movies.map((movie) => 
                        (
                            <MovieCard
                                key={movie.id} 
                                movie={movie}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default MovieList;