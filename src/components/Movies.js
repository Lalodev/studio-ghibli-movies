import { useEffect, useState } from "react";
import MovieForm from "./MovieForm";
import MovieList from "./MovieList";

const initialMovies = [
  {
    id: 1,
    title: "El castillo en el cielo",
    year: "1986",
    seen: false,
  },
  {
    id: 2,
    title: "La tumba de las luciérnagas",
    year: "1988",
    seen: true,
  },
  {
    id: 3,
    title: "Mi vecino Totoro",
    year: "1988",
    seen: true,
  },
];

const localMovies = JSON.parse(localStorage.getItem("movies"));

const Movies = () => {
  const [movies, setMovies] = useState(localMovies || initialMovies);
  const [movieEdit, setMovieEdit] = useState(null);

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);

  //Delete
  const movieDelete = (id) => {
    if (movieEdit && id === movieEdit.id) {
      setMovieEdit(null);
    }

    const newData = movies.filter((movie) => movie.id !== id);
    setMovies(newData);
  };

  //Seen
  const seenMovie = (id) => {
    const newData = movies.map((movie) =>
      movie.id === id ? { ...movie, seen: !movie.seen } : movie
    );

    setMovies(newData);
  };

  //Add
  const movieAdd = (movie) => {
    const newMovie = {
      id: Date.now(),
      ...movie,
      seen: false,
    };

    const newData = [newMovie, ...movies];

    setMovies(newData);
  };

  //Edit
  const movieUpdate = (movieEdit) => {
    const newData = movies.map((movie) =>
      movie.id === movieEdit.id ? movieEdit : movie
    );

    setMovies(newData);
  };

  return (
    <div>
      <MovieForm
        movieAdd={movieAdd}
        movieUpdate={movieUpdate}
        movieEdit={movieEdit}
        setMovieEdit={setMovieEdit}
      />
      <hr />
      <MovieList
        movies={movies}
        movieDelete={movieDelete}
        seenMovie={seenMovie}
        setMovieEdit={setMovieEdit}
      />
    </div>
  );
};

export default Movies;
