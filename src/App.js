import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import MainPage from "./views/main/MainPage";
import CatalogPage from "./views/catalogue/CatalogPage";
import FavoritesPage from "./views/favorites/FavoritesPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Route>
    </Routes>
  );
}

export default App;
