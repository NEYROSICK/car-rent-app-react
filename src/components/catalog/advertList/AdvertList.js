import React from "react";
import { useSelector } from "react-redux";
import { getAdverts } from "../../../redux/selectors";
import AdvertItem from "../advertItem/AdvertItem";

const AdvertList = () => {
  const adverts = useSelector(getAdverts);

  return (
    <ul>
      {adverts.map((advert) => (
        <AdvertItem advert={advert} key={advert.id} />
      ))}
    </ul>
  );
};

export default AdvertList;
