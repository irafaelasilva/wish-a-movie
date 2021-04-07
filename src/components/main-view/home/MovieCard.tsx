import React from "react";
import Rating from "@material-ui/lab/Rating";
import styled from "@emotion/styled";

const Sprite = styled.img`
  width: 210px;
  height: 300px;
`;

const Card = styled.div`
  max-width: 210px;
  max-height: 304px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0, 12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  margin-bottom: 40px;
`;

interface Props {
  posterPath: string;
  overview?: string;
  releaseDate?: string;
  voteRating: number;
}

export const MovieCard = ({ posterPath, voteRating }: Props) => {
  const imageUrl = "https://image.tmdb.org/t/p/w200";
  return (
    <div className="col-md-3 col-sm-6 mb-5" data-testid="movie-card">
      <Card className="card-img text-center">
        <Sprite
          className="card-img-top rounded mx-auto mt-2"
          src={`${imageUrl}${posterPath}`}
          data-testid="movie-card-image"
        />
        <div className="card-body mx-auto" data-testid="movie-card-rating">
          <Rating
            name="size-small"
            value={voteRating / 2.5}
            precision={0.5}
            readOnly
          />
        </div>
      </Card>
    </div>
  );
};

export default MovieCard;
