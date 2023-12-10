import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { lazy } from "react";

const MainPage = lazy(() => import("./views/main/MainPage"));
const CatalogPage = lazy(() => import("./views/catalogue/CatalogPage"));
const FavoritesPage = lazy(() => import("./views/favorites/FavoritesPage"));

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
