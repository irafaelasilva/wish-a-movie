import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import MovieCard from "./MovieCard";

describe("MovieCard component", () => {
  test("Should render the entire card", () => {
    render(<MovieCard posterPath="fakeposterpath" voteRating={3.5} />);
    const movieCard = screen.getByTestId("movie-card");
    expect(movieCard).toBeInTheDocument();
  });

  test("Should render the image card", () => {
    render(<MovieCard posterPath="fakeposterpath" voteRating={3.5} />);
    const movieCardImage = screen.getByTestId("movie-card-image");
    expect(movieCardImage).toBeInTheDocument();
  });

  test("Should render the movie rating", () => {
    render(<MovieCard posterPath="fakeposterpath" voteRating={3.5} />);
    const MovieCardRating = screen.getByTestId("movie-card-rating");
    expect(MovieCardRating).toBeInTheDocument();
  });
});
