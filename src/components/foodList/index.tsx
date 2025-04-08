import { FoodCard } from "../card";
import { Food } from "./../../models/Food";
import { List } from "./style";

export type FoodListProps = {
  type: "home" | "foodPage";
  foods: Food[];
};

export const FoodList = ({ type, foods }: FoodListProps) => (
  <div>
    <List type={type}>
      {foods.map((food) => (
        <FoodCard
          key={food.id}
          type={type}
          foodName={food.foodName}
          description={food.description}
          tag={food.tag}
          image={food.image}
          rating={food.rating}
          to={"/pizza"}
        />
      ))}
    </List>
  </div>
);
