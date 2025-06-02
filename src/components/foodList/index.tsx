import useRestaurantsContext from "../../api/context/use-restaurants-context";
import { FoodCard } from "../card";
import { List } from "./style";

export type FoodListProps = {
  type: "home" | "foodPage";
};

export const FoodList = ({ type }: FoodListProps) => {
  const { restaurants } = useRestaurantsContext();

  return (
    <div>
      <List type={type}>
        {restaurants.map((restaurants) => (
          <FoodCard
            key={restaurants.id}
            type={type}
            restaurantName={restaurants.titulo}
            description={restaurants.descricao}
            tag={
              restaurants.destacado
                ? ["Destaque", restaurants.tipo]
                : [restaurants.tipo]
            }
            destacado={restaurants.destacado}
            image={restaurants.capa}
            rating={restaurants.avaliacao}
            to={"/pizza"}
          />
        ))}
      </List>
    </div>
  );
};
