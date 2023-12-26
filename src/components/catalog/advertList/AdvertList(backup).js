import { useDispatch, useSelector } from "react-redux";
import { getAdCount, getAdverts, getBrand, getPage } from "../../../redux/selectors";
import Container from "../../common/container/Container";
import Card from "../../common/card/Card";
import { ListSection, CardList, BtnPagination } from "./advertList.styled";
import { useEffect, useState } from "react";
import { setPage } from "../../../redux/slices/advertSlice";
import { defaultLimit } from "../../../redux/constants";
import { fetchAdverts } from "../../../redux/operations";
import { setFilter } from "../../../redux/slices/filterSlice";

const AdvertList = () => {
  let adverts = useSelector(getAdverts);
  const brand = useSelector(getBrand);
  const count = useSelector(getAdCount);
  const page = useSelector(getPage);
  const dispatch = useDispatch();

  // const filterAdverts = () => {
  //   return adverts.filter(({ make }) => make === brand);
  // };

  // if (brand) {
  //   adverts = filterAdverts();
  // }

  const [loadedImagesCount, setLoadedImagesCount] = useState(0);
  const [areAllImagesLoaded, setAreAllImagesLoaded] = useState(false);

  const handleImageLoad = () => {
    setLoadedImagesCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    dispatch(fetchAdverts({ page }));
  }, []);

  // useEffect(() => {
  //   if (loadedImagesCount === adverts.length) {
  //     console.log(loadedImagesCount, adverts.length);
  //     setAreAllImagesLoaded(true);
  //     console.log(areAllImagesLoaded);
  //   }
  // }, [loadedImagesCount, adverts.length]);

  // useEffect(() => {
  //   dispatch(setPage(1));
  // }, [dispatch]);

  return (
    <>
      <ListSection areAllLoaded={areAllImagesLoaded}>
        <Container>
          <h2 className="visually-hidden">Car advertisement list</h2>
          <CardList>
            {adverts.map((advert) => (
              <Card item={advert} key={advert.id} onImageLoad={handleImageLoad} />
            ))}
          </CardList>
        </Container>
      </ListSection>
      {count === defaultLimit && (
        <BtnPagination
          onClick={() => {
            dispatch(setPage(page + 1));
          }}
          areAllLoaded={areAllImagesLoaded}
        >
          Load more
        </BtnPagination>
      )}
    </>
  );
};

export default AdvertList;
