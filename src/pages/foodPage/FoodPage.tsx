import { HomeContainer } from "../home/style";
import { FoodItems } from "../../models/FoodItems";
import { FoodList } from "../../components/foodList";
import { HomeBanner } from "../../components/banner";

export const FoodPage = () => {
  const foodList = FoodItems.filter((food) => food.id === 3)[0];
  const newFoodList = Array(6).fill(foodList);

  return (
    <>
      <HomeBanner typeBanner={"foodPage"} />
      <HomeContainer>
        <div className="container">
          <FoodList type={"foodPage"} foods={newFoodList} />
        </div>
      </HomeContainer>
    </>
  );
};
