import React, { createContext, useState, FC } from "react";
import { Movie } from "../entities/movie";

export type MoviesContextState = {
  movies: Movie[];
  addWatchedMovie: (movie: Movie) => void;
};

const contextDefaultValues: MoviesContextState = {
  movies: [],
  addWatchedMovie: () => {},
};

export const MoviesContext =
  createContext<MoviesContextState>(contextDefaultValues);

const MoviesProvider: FC = ({ children }) => {
  const [movies, setMovies] = useState<Movie[]>(contextDefaultValues.movies);

  const addWatchedMovie = (watchedMovie: Movie) =>
    setMovies((movies) => [...movies, watchedMovie]);

  return (
    <MoviesContext.Provider
      value={{
        movies,
        addWatchedMovie,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesProvider;
