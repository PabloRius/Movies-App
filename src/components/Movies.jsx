import PropTypes from "prop-types";
import "./Movies.css";

function MoviesList({ movies }) {
  return (
    <ul className="movies">
      {movies.map((movie) => (
        <li key={movie.id} className="movie">
          <h3> {movie.title} </h3>
          <p> {movie.year} </p>
          <img src={movie.poster} alt={movie.Title} />
        </li>
      ))}
    </ul>
  );
}

function NoMovies() {
  return <p> No Movies found with that title </p>;
}

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export function Movies({ movies }) {
  const hasMovies = movies?.length > 0;
  return hasMovies ? <MoviesList movies={movies} /> : <NoMovies />;
}

Movies.propTypes = {
  movies: PropTypes.array.isRequired,
};
