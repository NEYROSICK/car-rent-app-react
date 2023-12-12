import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdverts } from "../../redux/operations";
import AdvertList from "../../components/catalog/advertList/AdvertList";
// import { getIsLoading } from "../../redux/selectors";
import Filters from "../../components/common/filters/Filters";
import { defaultLimit } from "../../redux/constants";
import { getAdCount, getPage } from "../../redux/selectors";
import { setFilter } from "../../redux/filterSlice";
import { setPage } from "../../redux/advertSlice";
const CatalogPage = (props) => {
  const dispatch = useDispatch();
  const count = useSelector(getAdCount);
  const page = useSelector(getPage);

  useEffect(() => {
    dispatch(fetchAdverts({ page, limit: defaultLimit }));

    return () => {
      dispatch(setFilter(null));
    };
  }, [dispatch, page]);

  useEffect(() => {
    dispatch(setPage(1));
  }, []);

  return (
    <main>
      <Filters />
      <AdvertList />
      {count === defaultLimit && (
        <button
          onClick={() => {
            dispatch(setPage(page + 1));
          }}
        >
          Load more
        </button>
      )}
    </main>
  );
};

export default CatalogPage;
