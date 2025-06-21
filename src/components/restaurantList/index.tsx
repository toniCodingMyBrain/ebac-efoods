import { useGetRestaurantsQuery } from "../../services/api";
import { RestaurantCard } from "../card";
import { List } from "./style";

export type RestaurantListProps = {
  type: "home";
};

export const RestaurantList = ({ type }: RestaurantListProps) => {
  // const { restaurants } = useRestaurantsContext();
  const { data: restaurants, isLoading } = useGetRestaurantsQuery();

  if (restaurants || !isLoading) {
    return (
      <div>
        <List type={type}>
          {restaurants.map((restaurant) => (
            <>
              <RestaurantCard
                key={restaurant.id}
                type={type}
                foodId={restaurant.id}
                foodName={restaurant.titulo}
                description={restaurant.descricao}
                tag={restaurant.destacado ? ["Destaque", restaurant.tipo] : [restaurant.tipo]}
                destacado={restaurant.destacado}
                image={restaurant.capa}
                rating={restaurant.avaliacao}
                to={`/${restaurant.tipo.toLowerCase()}`}
              />
            </>
          ))}
        </List>
      </div>
    );
  } else {
    return <h4>Carregando...</h4>;
  }
};
