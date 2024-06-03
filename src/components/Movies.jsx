import PropTypes from "prop-types";
import "./Movies.css";

function MoviesList({ movies }) {
  console.log(movies);
  return (
    <ul className="MoviesList">
      {movies.map((movie) => (
        <li key={movie.is}>
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

MoviesList.defaultProps = {
  movies: [],
};

export function Movies({ movies }) {
  const hasMovies = movies?.length > 0;
  return hasMovies ? <MoviesList movies={movies} /> : <NoMovies />;
}

Movies.propTypes = {
  movies: PropTypes.array.isRequired,
};

Movies.defaultProps = {
  movies: [],
};
