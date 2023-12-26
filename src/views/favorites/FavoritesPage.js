import { useSelector } from "react-redux";
import Container from "../../components/common/container/Container";
import Filters from "../../components/common/filters/Filters";
import FavoriteList from "../../components/favorites/favoriteList/FavoriteList";
import { Section } from "./favoritePage.styled";
import { getFavorites } from "../../redux/selectors";

const FavoritesPage = () => {
  const favorites = useSelector(getFavorites);
  return (
    <main>
      <Section>
        <Container>
          {Boolean(favorites.length) && <Filters favorites />}
          <FavoriteList />
        </Container>
      </Section>
    </main>
  );
};

export default FavoritesPage;
