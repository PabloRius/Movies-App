import { useEffect, useRef, useState } from "react";
import "./App.css";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";

function useSearch() {
  const [search, updateSearch] = useState("");
  const [error, setError] = useState();
  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === "";
      return;
    }

    if (search === "") {
      setError("Can't use an empty query");
      return;
    }

    if (search.length < 3) {
      setError("The search must have at least 3 characters");
      return;
    }

    setError(null);
  }, [search]);

  return { search, updateSearch, error };
}

function App() {
  const [sort, setSort] = useState(false);
  const { search, updateSearch, error } = useSearch();
  const { movies, getMovies, loading } = useMovies({ search, sort });

  const handleSubmit = (event) => {
    event.preventDefault();
    getMovies({ search });
  };

  const handleChange = (event) => {
    updateSearch(event.target.value);
  };

  const handleSort = () => {
    setSort((prev) => !prev);
  };

  return (
    <div className="page">
      <header>
        <h1>Movie Navigator</h1>
        <form onSubmit={handleSubmit} className="form">
          <input
            required
            onChange={handleChange}
            name="query"
            type="text"
            placeholder="Avengers, Star Wars, The Matrix, ..."
            value={search}
            style={{
              border: "1px solid transparent",
              borderColor: error ? "red" : "transparent",
            }}
          />
          <input type="submit" value="Search" />
          <input
            type="checkbox"
            name="sort"
            id="sort"
            checked={sort}
            onChange={handleSort}
          />
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </header>

      <main>{loading ? <p>Loading ...</p> : <Movies movies={movies} />}</main>
    </div>
  );
}

export default App;
