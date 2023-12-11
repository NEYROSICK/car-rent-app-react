import { useSelector } from "react-redux";
import { getAdverts, getBrand } from "../../../redux/selectors";
import Container from "../../common/container/Container";
import Card from "../../common/card/Card";
import { AdvertListSection, CardList } from "./advertList.styled";

const AdvertList = () => {
  let adverts = useSelector(getAdverts);
  const brand = useSelector(getBrand);

  const filterAdverts = () => {
    if (brand) {
      return adverts.filter(({ make }) => make === brand);
    }
    return adverts;
  };

  adverts = filterAdverts();

  return (
    <AdvertListSection>
      <Container>
        <h2 className="visually-hidden">Car advertisement list</h2>
        <CardList>
          {adverts.map((advert) => (
            <Card item={advert} key={advert.id} />
          ))}
        </CardList>
      </Container>
    </AdvertListSection>
  );
};

export default AdvertList;
