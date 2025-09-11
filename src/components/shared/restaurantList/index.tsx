import React from "react";
import { useGetRestaurantsQuery } from "../../../services/api";
import { RestaurantCard } from "../../ui/card";
import * as S from "./style";
import { HomeContainer } from "./../../../pages/home/style";
import { BarLoader } from "react-spinners";

export type RestaurantListProps = {
  type: "home";
};

export const RestaurantList = ({ type }: RestaurantListProps) => {
  const { data: restaurants, isLoading } = useGetRestaurantsQuery();

  if (isLoading)
    return (
      <HomeContainer>
        <div className="loader">
          <BarLoader height={10} color="#E66767" />
        </div>
      </HomeContainer>
    );

  if (!restaurants)
    return (
      <HomeContainer>
        <div className="loader">
          <h4>Oops... estamos com problemas técnicos!</h4>
        </div>
      </HomeContainer>
    );

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
