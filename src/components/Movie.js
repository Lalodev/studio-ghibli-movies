import "../css/Movie.css";
import logo from "../images/studio-ghibli-logo.png";

const Movie = ({ movie, movieDelete, seenMovie, setMovieEdit }) => {
  return (
    <div className="movie-contenedor">
      <h5>
        {movie.title} - ( {movie.year} )
      </h5>
      <div className="movie-logo">
        <img src={logo} alt="Studio Ghibli Logo" />
      </div>
      <div className="movie-actions">
        <div className="movie-buttons">
          <button onClick={() => setMovieEdit(movie)}>Editar</button>
          <button onClick={() => movieDelete(movie.id)}>Eliminar</button>
        </div>
        <div className="movie-seen">
          <input
            onChange={() => seenMovie(movie.id)}
            type="checkbox"
            checked={movie.seen}
          />
        </div>
      </div>
    </div>
  );
};

export default Movie;
