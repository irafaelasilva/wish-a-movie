import axios from "axios";

export const getMovies = async (url: string) => {
  const response = await axios.get(url);
  return response;
};
