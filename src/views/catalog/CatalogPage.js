import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdverts } from "../../redux/operations";
import AdvertList from "../../components/catalog/advertList/AdvertList";
import Filters from "../../components/common/filters/Filters";
import { defaultLimit } from "../../redux/constants";
import { getAdCount, getIsLoading, getPage } from "../../redux/selectors";
import { setFilter } from "../../redux/filterSlice";
import { setPage } from "../../redux/advertSlice";
import { BtnPagination, Main } from "./catalogPage.styled";
import Loader from "../../components/common/loader/Loader";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const count = useSelector(getAdCount);
  const page = useSelector(getPage);
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchAdverts({ page, limit: defaultLimit }));

    return () => {
      dispatch(setFilter(null));
    };
  }, [dispatch, page]);

  useEffect(() => {
    dispatch(setPage(1));
  }, [dispatch]);

  return (
    <Main>
      <Filters />
      {isLoading ? (
        <Loader size={90} />
      ) : (
        <>
          <AdvertList />
        </>
      )}
    </Main>
  );
};

export default CatalogPage;
