import React from "react";
import Rating from "@material-ui/lab/Rating";
import styled from "@emotion/styled";
import { Movie } from "../../entities/movie";

const Container = styled.div`
  margin-left: 10px;
  margin-bottom: 5px;
  max-width: 240px;
  width: 240px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0, 12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

const Sprite = styled.img``;

interface Props {
  movie: Movie;
}

export const MovieCard = ({ movie }: Props) => {
  const imageUrl = "https://image.tmdb.org/t/p/w200";
  return (
    <Container
      className="card text-center col-md-3 mb-5"
      data-testid="movie-card"
      role="listitem"
    >
      <div>
        <Sprite
          className="card-img-top rounded mx-auto mt-2"
          src={`${imageUrl}${movie.poster_path}`}
          data-testid="movie-card-image"
        />
        <div className="card-body mx-auto" data-testid="movie-card-rating">
          <Rating
            name="size-small"
            value={movie.vote_average / 2.5}
            precision={0.5}
            readOnly
          />
        </div>
      </div>
    </Container>
  );
};

export default MovieCard;
