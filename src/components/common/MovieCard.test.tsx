import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import MovieCard from "./MovieCard";
import { getMovieMock } from "../../entities/movie/index.mock";
import { Movie } from "../../entities/movie";

const movieMock = getMovieMock()
const renderMovieCard = (overrideProps?: Partial<Movie>) => render(<MovieCard movie={movieMock} {...overrideProps}/>)

describe("MovieCard component", () => {
  it("renders a post path", () => {
    renderMovieCard({
      poster_path:'https://image.tmdb.org/t/p/w200/7rhzEufovmmUqVjcbzMHTBQ2SCG.jpg'
    })
    expect(screen.getByTestId('movie-card-image')).toBeInTheDocument()
  });

  it("renders a movie rating", () => {
    renderMovieCard({
     vote_average: 8
    })
    expect(screen.getByTestId('movie-card-rating')).toBeInTheDocument()
  });
});
