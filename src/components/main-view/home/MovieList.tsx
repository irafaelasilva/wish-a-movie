import styled from "@emotion/styled";
import React from "react";
import { Movie } from "../types";
import MovieCard from "./MovieCard";

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

interface Props {
  movies: Movie[];
}

const MovieList = ({ movies }: Props) => {
  return (
    <CardContainer>
      {movies.map((movie) => (
        <MovieCard
          posterPath={movie.poster_path}
          releaseDate={movie.release_date}
          voteRating={movie.vote_average}
        />
      ))}
    </CardContainer>
  );
};

export default MovieList;
