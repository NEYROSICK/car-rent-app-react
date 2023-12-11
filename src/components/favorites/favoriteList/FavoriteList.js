import React from "react";
import { useSelector } from "react-redux";
import { getFavorites } from "../../../redux/selectors";
import Container from "../../common/container/Container";
import Card from "../../common/card/Card";

const FavoriteList = () => {
  // const dispatch = useDispatch();
  const favorites = useSelector(getFavorites);

  return (
    <section>
      <Container>
        <ul>
          {favorites.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default FavoriteList;
