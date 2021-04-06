import styled from "@emotion/styled";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Movie } from "../types";
import MovieList from "./MovieList";

const TitlePage = styled.h2`
  padding: 20px;
`;

const Home = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MDB_KEY}&language=en-US&page=1`
        )
        .then((response) => setMovies(response.data.results))
        .catch((error) => {
          console.log(error);
        });
    };

    fetchData();
  }, []);

  return (
    <>
      <TitlePage>Popular movies</TitlePage>
      <div>{movies && <MovieList movies={movies} />}</div>
    </>
  );
};

export default Home;
