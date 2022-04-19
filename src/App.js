import "./App.css";
import Movies from "./components/Movies";
import logo from "./images/studio-ghibli-logo.png";

function App() {
  return (
    <div className="app-movies">
      <div className="logo-contenedor">
        <div className="logo">
          <img src={logo} alt="Studio Ghibli" />
        </div>
      </div>
      <div className="movies-contenedor">
        <Movies />
      </div>
    </div>
  );
}

export default App;
