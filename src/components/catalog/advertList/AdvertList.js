import React from "react";
import { useSelector } from "react-redux";
import { getAdverts } from "../../../redux/selectors";
import AdvertItem from "../advertItem/AdvertItem";
import Container from "../../common/container/Container";

const AdvertList = () => {
  const adverts = useSelector(getAdverts);

  return (
    <section>
      <Container>
        <h2 className="visually-hidden">Car advertisement list</h2>
        <ul>
          {adverts.map((advert) => (
            <AdvertItem advert={advert} key={advert.id} />
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default AdvertList;
