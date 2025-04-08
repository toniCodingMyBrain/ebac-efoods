import { HomeContainer } from "../home/style";
import { FoodItems } from "../../models/FoodItems";
import { FoodList } from "../../components/foodList";
import { HomeBanner } from "../../components/banner";

type FoodPageProps = {
  foodItemId: number;
};

export const FoodPage = ({ foodItemId }: FoodPageProps) => {
  const foodList = FoodItems.filter((food) => food.id === foodItemId)[0];
  const newFoodList = Array(6).fill(foodList);

  return (
    <>
      <HomeBanner
        typeBanner={"foodPage"}
        foodTags={foodList.tag[0]}
        foodName={foodList.foodName}
      />
      {console.log(newFoodList)}
      <HomeContainer>
        <div className="container">
          <FoodList type={"foodPage"} foods={newFoodList} />
        </div>
      </HomeContainer>
    </>
  );
};
