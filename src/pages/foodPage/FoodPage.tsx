import { HomeContainer } from "../home/style";
import { FoodItems } from "../../models/FoodItems";
import { FoodList } from "../../components/foodList";

export const FoodPage = () => {
  return (
    <HomeContainer>
      <FoodList type={"foodPage"} foods={FoodItems} />
    </HomeContainer>
  );
};
