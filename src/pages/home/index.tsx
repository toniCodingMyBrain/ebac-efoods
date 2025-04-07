import { FoodList } from "../../components/foodList";
import { FoodItems } from "../../models/FoodItems";
import { HomeContainer } from "./style";

export const Home = () => (
  <HomeContainer>
    <FoodList foods={FoodItems} />
  </HomeContainer>
);
