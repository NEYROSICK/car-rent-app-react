import Button from "../../components/common/button/Button";
import Container from "../../components/common/container/Container";
import {
  BrandColor,
  ButtonContainer,
  Img,
  Main,
  MainContainer,
  MainTagline,
  MainTitle,
  Section,
} from "./mainPage.styled";
import backgroundСar from "../../images/background-car.png";

const MainPage = () => {
  return (
    <Main>
      <Section>
        <Img src={backgroundСar} width="800" alt="background-pattern" />
        <MainContainer>
          <Container>
            <MainTitle>
              Renting Car Never Been <BrandColor>So Easy</BrandColor> Before!
            </MainTitle>
            <MainTagline>
              Book the selected car effortlessly, pay for driving only, Join our service instantly
              by using our contact number.
            </MainTagline>
            <ButtonContainer>
              <Button variant="main" to="/catalog">
                Search
              </Button>
              <Button variant="main" href="tel:+380730000000">
                Contact us
              </Button>
            </ButtonContainer>
          </Container>
        </MainContainer>
      </Section>
    </Main>
  );
};

export default MainPage;
