import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { FoodPage } from "./pages/foodPage/FoodPage";

const PageRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/pizza" element={<FoodPage />} />
    <Route path="/trattoria" element={<FoodPage />} />
    <Route path="/sushi" element={<FoodPage />} />
  </Routes>
);

export default PageRoutes;
