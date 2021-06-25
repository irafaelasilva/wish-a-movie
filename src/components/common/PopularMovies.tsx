import { useEffect, useState } from "react";
import { Movie } from "../../entities/movie";
import MovieList from "./MovieList";
import { getPopular } from '/Users/rafaelasilva/Desktop/personal-web/wish-a-movie/src/api/index'

export const PopularMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      getPopular()
        .then((response) => setMovies(response.data.results))
        .catch((error) => {
          console.log(error);
        });
    };

    fetchData();
  }, []);

  return <MovieList movies={movies} data-testid="move-list" />;
};
