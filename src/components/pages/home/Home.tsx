import styled from "@emotion/styled";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { HomeUrl } from "../../../constants";
import { Movie } from "../types";
import MovieList from "../../common/MovieList";

const TitlePage = styled.h2`
  padding: 20px;
`;

const HomePage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get(HomeUrl)
        .then((response) => setMovies(response.data.results))
        .catch((error) => {
          console.log(error);
        });
    };

    fetchData();
  }, []);

  console.log({ movies });

  return (
    <>
      <TitlePage>Popular movies</TitlePage>
      <MovieList movies={movies} data-testid="move-list" />
    </>
  );
};

export default HomePage;
