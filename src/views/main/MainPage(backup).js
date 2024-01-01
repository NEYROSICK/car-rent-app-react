import Button from "../../components/common/button/Button";
import Container from "../../components/common/container/Container";
import {
  ButtonContainer,
  CatalogLink,
  Main,
  MainBtn,
  MainTagline,
  MainTitle,
  Section,
  TitleContainer,
} from "./mainPage.styled";

const MainPage = () => {
  return (
    <Main>
      <Section>
        <TitleContainer>
          <Container>
            <MainTitle>Need a car?</MainTitle>
            <MainTagline>Get the best price here</MainTagline>
          </Container>
        </TitleContainer>
        <Container>
          <ButtonContainer>
            {/* <CatalogLink to="/catalog">Rent a car</CatalogLink> */}
            <Button variant="main" href="tel:+380730000000">
              Contact us
            </Button>
            <Button variant="main" to="/catalog">
              Rent a car
            </Button>
            {/* <ContactLink to="/catalog">Rent a car</ContactLink> */}
          </ButtonContainer>
        </Container>
      </Section>
    </Main>
  );
};

export default MainPage;
