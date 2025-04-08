import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { FoodPage } from "./pages/foodPage/FoodPage";

const PageRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/pizza" element={<FoodPage foodItemId={3} />} />
    <Route path="/trattoria" element={<FoodPage foodItemId={2} />} />
    <Route path="/sushi" element={<FoodPage foodItemId={1} />} />
  </Routes>
);

export default PageRoutes;
