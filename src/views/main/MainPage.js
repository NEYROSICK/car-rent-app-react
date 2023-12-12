import Container from "../../components/common/container/Container";
import { Main, MainBtn, MainTagline, MainTitle } from "./mainPage.styled";

const MainPage = () => {
  return (
    <Main>
      <Container>
        <MainTitle>Need a car?</MainTitle>
        <MainTagline>Get the best price here</MainTagline>
        <MainBtn to="/catalog">Rent a car</MainBtn>
      </Container>
    </Main>
  );
};

export default MainPage;
