import styled from "@emotion/styled";
import { getMovies } from "../../../api";
import { popularMoviesUrl } from "../../../constants";
import { Popular } from "../../common/PopularMovies";

const TitlePage = styled.h2`
  padding: 20px;
`;

const HomePage = () => {
  return (
    <>
      <TitlePage>Popular</TitlePage>
      <Popular getMovies={() => getMovies(popularMoviesUrl)} />
      <TitlePage>New Releases</TitlePage>
    </>
  );
};

export default HomePage;
