import { useGetRestaurantsQuery } from "../../services/api";
import { Restaurant } from "../../services/restaurants-types";
import { RestaurantCard } from "../card";
import { List } from "./style";

export type RestaurantListProps = {
  type: "home";
};

export const RestaurantList = ({ type }: RestaurantListProps) => {
  // const { restaurants } = useRestaurantsContext();
  const { data, isLoading } = useGetRestaurantsQuery();
  const restaurants = data as Restaurant[];

  if (!isLoading) return <h4>Carregando...</h4>;
  if (!data) return <h4>Erro ao carregar os dados...</h4>;
  console.log("IsLoading: " + isLoading);
  console.log("Restaurants: " + restaurants);
  console.log("Data: " + data);

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
};
