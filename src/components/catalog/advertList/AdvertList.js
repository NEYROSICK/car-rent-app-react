import { useSelector } from "react-redux";
import { getAdverts, getBrand } from "../../../redux/selectors";
import AdvertItem from "../advertItem/AdvertItem";
import Container from "../../common/container/Container";

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
