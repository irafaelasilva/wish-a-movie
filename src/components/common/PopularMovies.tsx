import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Movie } from "../../entities/movie";
import MovieList from "./MovieList";

interface Props {
  getMovies: () => Promise<AxiosResponse<any>>;
}

export const Popular = ({ getMovies }: Props) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      getMovies()
        .then((response) => setMovies(response.data.results))
        .catch((error) => {
          console.log(error);
        });
    };

    fetchData();
  }, [getMovies]);

  return <MovieList movies={movies} data-testid="move-list" />;
};
