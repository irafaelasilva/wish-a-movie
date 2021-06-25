import { Movie } from "."

export const getMock = <T>(def: () => T) => (p?: Partial<T>): T => ({
    ...def(),
    ...p,
  })

const defaultMoviesMock = (): Movie => {
  return {
    id: 1,
    title: 'A fake movie',
    overview: 'A description for a fake movie',
    release_date: "2021-06-17",
    poster_path: "/7rhzEufovmmUqVjcbzMHTBQ2SCG.jpg",
    vote_average: 9.9,
    adult: false,
    backdrop_path: "/7rhzEufovmmUqVjcbzMHTBQ2SCG.jpg",
    original_language: "en",
    popularity: 6537.554,
    video: false,
    vote_count:  1066,
  }
}

export const getMoviesMock = getMock(defaultMoviesMock)