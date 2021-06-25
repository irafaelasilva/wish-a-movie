import styled from "@emotion/styled";
import { PopularMovies } from "../../common/PopularMovies";

const TitlePage = styled.h2`
  padding: 20px;
`;

const HomePage = () => {
  return (
    <>
      <TitlePage>Popular movies</TitlePage>
      <PopularMovies />
    </>
  );
};

export default HomePage;
