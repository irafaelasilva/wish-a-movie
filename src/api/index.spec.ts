import axios from "axios";
import { getMovies } from ".";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("getMovies", () => {
  it("fetches successfully data from an API", async () => {
    const expectedResult = {
      data: [
        {
          id: 1,
          title: "A fake movie",
          overview: "A description for a fake movie",
          release_date: "2021-06-17",
          poster_path: "/7rhzEufovmmUqVjcbzMHTBQ2SCG.jpg",
          vote_average: 9.9,
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
          overview: "A description for a fake movie",
          release_date: "2021-06-17",
          poster_path: "/7rhzEufovmmUqVjcbzMHTBQ2SCG.jpg",
          vote_average: 9.9,
          adult: false,
          backdrop_path: "/7rhzEufovmmUqVjcbzMHTBQ2SCG.jpg",
          original_language: "en",
          popularity: 6537.554,
          video: false,
          vote_count: 1066,
        },
      ],
    };
    mockedAxios.get.mockImplementationOnce(() =>
      Promise.resolve(expectedResult)
    );

    await expect(getMovies("https//fake.com")).resolves.toEqual(expectedResult);
  });

  it("fetches erroneously data from an API", async () => {
    const errorMessage = "Network Error";

    mockedAxios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage))
    );

    await expect(getMovies("https//fake.com")).rejects.toThrow(errorMessage);
  });
});
