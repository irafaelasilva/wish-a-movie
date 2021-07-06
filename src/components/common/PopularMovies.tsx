import { useEffect, useState } from "react";
import { Movie } from "../../entities/movie";
import MovieList from "./MovieList";
import Error from "./Error";

interface Props {
  getMovies: () => Promise<any>;
}

export const Popular = ({ getMovies }: Props) => {
  const [hasError, setHasError] = useState<boolean>(false);
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      getMovies()
        .then((response) => setMovies(response.data.results))
        .catch(() => {
          setHasError(true);
        });
    };

    fetchData();
  }, [getMovies]);

  return (
    <>
      {!hasError ? (
        <MovieList movies={movies} />
      ) : (
        <Error message={"Could not retrive movies at this time"} />
      )}
    </>
  );
};
