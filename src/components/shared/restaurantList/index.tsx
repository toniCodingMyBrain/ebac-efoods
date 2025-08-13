import { useGetRestaurantsQuery } from "../../../services/api";
import { Restaurant } from "../../../services/models/restaurants-types";
import { RestaurantCard } from "../../ui/card";
import { List } from "./style";

export type RestaurantListProps = {
  type: "home";
};

export const RestaurantList = ({ type }: RestaurantListProps) => {
  const { data, isLoading, error } = useGetRestaurantsQuery();
  const restaurants = data as Restaurant[];

  console.log(error);
  console.log(data);

  if (isLoading) return <h4>Carregando...</h4>;
  if (!data) return <h4>Erro ao carregar os dados...</h4>;

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
