import { HomeContainer } from "../home/style";
import { FoodItems } from "../../models/FoodItems";
import { FoodList } from "../../components/foodList";

export const FoodPage = () => {
  const foodList = FoodItems.filter((food) => food.id === 3)[0];
  const newFoodList = Array(6).fill(foodList);

  return (
    <HomeContainer>
      <FoodList type={"foodPage"} foods={newFoodList} />
    </HomeContainer>
  );
};
