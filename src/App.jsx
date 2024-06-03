import "./App.css";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";

function App() {
  const { movies } = useMovies();

  return (
    <div className="page">
      <header>
        <h1>Movie Navigator</h1>
        <form className="form">
          <input
            type="text"
            placeholder="Avengers, Star Wars, The Matrix, ..."
          />
          <input type="submit" value="Search" />
        </form>
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  );
}

export default App;
