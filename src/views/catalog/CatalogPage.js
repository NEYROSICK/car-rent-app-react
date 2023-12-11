import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdverts } from "../../redux/operations";
import AdvertList from "../../components/catalog/advertList/AdvertList";
import { getIsLoading } from "../../redux/selectors";
import Filters from "../../components/common/filters/Filters";
import { defaultLimit } from "../../redux/constants";
const CatalogPage = (props) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchAdverts({ page: 1, limit: defaultLimit }));
  }, [dispatch]);

  return (
    <main>
      <Filters />
      {isLoading ? <></> : <AdvertList />}
    </main>
  );
};

export default CatalogPage;
