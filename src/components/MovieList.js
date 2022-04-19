import Movie from "./Movie";
import "../css/MovieList.css";

const MovieList = ({ movies, movieDelete, seenMovie, setMovieEdit }) => {
  return (
    <div>
      <h2>Movie List</h2>
      <div className="movie-list">
        {movies.map((movie) => (
          <Movie
            movie={movie}
            key={movie.id}
            movieDelete={movieDelete}
            seenMovie={seenMovie}
            setMovieEdit={setMovieEdit}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
