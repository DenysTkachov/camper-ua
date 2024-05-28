import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { AppLayout } from "./AppLayout/AppLayout.jsx";


const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("../pages/CatalogPage/CatalogPage"));
const FavouritePage = lazy(() => import("../pages/FavoritesPage/FavoritesPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));

export function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/home" element={<CatalogPage />} />
        <Route path="/favourite" element={<FavouritePage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

// export default App;