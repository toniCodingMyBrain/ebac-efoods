import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { FoodPage } from "./pages/foodPage/FoodPage";
import ScrollToTop from "./scrollFunction";

const PageRoutes = () => {
  // const { restaurants } = useRestaurantsContext();

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:tipo" element={<FoodPage />} />
      </Routes>
    </>
  );
};

export default PageRoutes;
