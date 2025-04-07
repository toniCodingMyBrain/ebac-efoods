import { FoodCard } from "../card";
import { Food } from "./../../models/Food";
import { List } from "./style";

export type FoodListProps = {
  foods: Food[];
};

export const FoodList = ({ foods }: FoodListProps) => (
  <div>
    <List>
      {foods.map((food) => (
        <FoodCard
          key={food.id}
          type={"foodPage"}
          foodName={food.foodName}
          description={food.description}
          tag={food.tag}
          image={food.image}
          rating={food.rating}
        />
      ))}
    </List>
  </div>
);
