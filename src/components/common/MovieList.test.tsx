import "@testing-library/jest-dom";
import { render, screen, within } from "@testing-library/react";
import { Movie } from "../../entities/movie";
import MovieList from "./MovieList";

export const moviesMock: Movie[] = [
  {
    id: 1,
    title: "A fake movie",
    overview: "A description for a fake movie",
    release_date: "2021-06-17",
    poster_path: "/7rhzEufovmmUqVjcbzMHTBQ2SCG.jpg",
    vote_average: 8,
    adult: false,
    backdrop_path: "/7rhzEufovmmUqVjcbzMHTBQ2SCG.jpg",
    original_language: "en",
    popularity: 6537.554,
    video: false,
    vote_count: 1066,
  },
  {
    id: 2,
    title: "Another fake movie",
    overview: "Another description for a fake movie",
    release_date: "2021-06-17",
    poster_path: "/7rhzEufovmmUqVjcbzMHTBQ2SCG.jpg",
    vote_average: 10,
    adult: false,
    backdrop_path: "/7rhzEufovmmUqVjcbzMHTBQ2SCG.jpg",
    original_language: "en",
    popularity: 6537.554,
    video: false,
    vote_count: 1066,
  },
];
const renderMovieList = (overrideProps?: Partial<Movie>) =>
  render(<MovieList movies={moviesMock} {...overrideProps} />);

describe("MovieList component", () => {
  it("renders list if two movies", () => {
    renderMovieList();
    const list = screen.getByRole("list");
    const { getAllByRole } = within(list);
    const items = getAllByRole("listitem");
    expect(items.length).toBe(2);
  });
});
