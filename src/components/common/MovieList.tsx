import styled from "@emotion/styled";
import { Movie } from "../../entities/movie";
import MovieCard from "./MovieCard";

const CardContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

interface Props {
  movies: Movie[];
}

const MovieList = ({ movies }: Props) => {
  return (
    <CardContainer aria-label="Movies">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </CardContainer>
  );
};

export default MovieList;
