import styled from "@emotion/styled";
import { Movie } from "../../entities/movie";
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
          data-testid="movie-card"
          key={movie.id}
          posterPath={movie.poster_path}
          releaseDate={movie.release_date}
          voteRating={movie.vote_average}
        />
      ))}
    </CardContainer>
  );
};

export default MovieList;
