import { useSelector } from "react-redux";
import Container from "../../components/common/container/Container";
import Filters from "../../components/common/filters/Filters";
import FavoriteList from "../../components/favorites/favoriteList/FavoriteList";
import { Main, Section } from "./favoritePage.styled";
import { getFavorites } from "../../redux/selectors";

const FavoritesPage = () => {
  const favorites = useSelector(getFavorites);
  return (
    <Main>
      <Section>
        <Container>
          {Boolean(favorites.length) && <Filters />}
          <FavoriteList />
        </Container>
      </Section>
    </Main>
  );
};

export default FavoritesPage;
