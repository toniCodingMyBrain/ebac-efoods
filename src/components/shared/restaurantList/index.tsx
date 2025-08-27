import React from "react";
import { useGetRestaurantsQuery } from "../../../services/api";
import { RestaurantCard } from "../../ui/card";
import * as S from "./style";

export type RestaurantListProps = {
  type: "home";
};

export const RestaurantList = ({ type }: RestaurantListProps) => {
  const { data: restaurants, isLoading } = useGetRestaurantsQuery();

  if (isLoading) return <h4>Carregando...</h4>;
  if (!restaurants) return <h4>Erro ao carregar os dados...</h4>;

  return (
    <div>
      <S.List type={type}>
        {restaurants.map((restaurant) => (
          <React.Fragment key={restaurant.id}>
            <RestaurantCard
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
          </React.Fragment>
        ))}
      </S.List>
    </div>
  );
};
