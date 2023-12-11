import React from "react";
import { useSelector } from "react-redux";
import { getFavorites } from "../../../redux/selectors";
import Container from "../../common/container/Container";
import Card from "../../common/card/Card";
import { CardList, FavoriteListSection } from "./favoriteList.styled";

const FavoriteList = () => {
  // const dispatch = useDispatch();
  const favorites = useSelector(getFavorites);

  return (
    <FavoriteListSection>
      <Container>
        <CardList>
          {favorites.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </CardList>
      </Container>
    </FavoriteListSection>
  );
};

export default FavoriteList;
