import { useEffect, useState } from "react";
import "../css/MovieForm.css";

const initialFormValues = {
  title: "",
  year: "",
};

const MovieForm = ({ movieAdd, movieUpdate, movieEdit, setMovieEdit }) => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const { title, year } = formValues;
  const [error, setError] = useState(false);

  useEffect(() => {
    if (movieEdit) {
      setFormValues(movieEdit);
    } else {
      setFormValues(initialFormValues);
    }
  }, [movieEdit]);

  //Input
  const handleInputChange = (e) => {
    const newData = {
      ...formValues,
      [e.target.name]: e.target.value,
    };

    setFormValues(newData);
  };

  //Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === "" || year.trim() === "") {
      setError(true);
      return;
    }

    if (movieEdit) {
      movieUpdate(formValues);
    } else {
      movieAdd(formValues);
      setFormValues(initialFormValues);
    }

    setError(false);
  };

  return (
    <div className="movie-form">
      <h2>Movie Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={title}
          placeholder="Type the movie title"
          onChange={handleInputChange}
          className={error ? "input error" : "input"}
        />
        <input
          type="text"
          name="year"
          value={year}
          placeholder="Type the year of the movie"
          onChange={handleInputChange}
          className={error ? "input error" : "input"}
        />
        <input type="submit" value={movieEdit ? "Editar" : "Agregar"} />
        {movieEdit && (
          <button onClick={() => setMovieEdit(null)}>Cancelar</button>
        )}
      </form>
    </div>
  );
};

export default MovieForm;
