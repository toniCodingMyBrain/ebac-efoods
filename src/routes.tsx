import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { FoodPage } from "./pages/foodPage/FoodPage";
import useRestaurantsContext from "./api/context/use-restaurants-context";
import ScrollToTop from "./scrollFunction";

const PageRoutes = () => {
  const { restaurants } = useRestaurantsContext();

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        {restaurants.map((restaurant) => (
          <Route
            path={`/${restaurant.tipo.toLowerCase()}`}
            element={<FoodPage restaurant={restaurant} />}
          />
        ))}
      </Routes>
    </>
  );
};

export default PageRoutes;
