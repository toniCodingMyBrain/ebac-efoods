import * as S from "../home/style";
import { HomeBanner } from "../../components/layout/banner";
import FoodList from "../../components/shared/foodCard";
import { useParams } from "react-router-dom";
import { useGetRestaurantsQuery } from "../../services/api";
import { BarLoader } from "react-spinners";

export const FoodPage = () => {
  const { tipo } = useParams();

  const { data: restaurants, isLoading } = useGetRestaurantsQuery();
  if (!restaurants || isLoading)
    return (
      <>
        <S.HomeContainer>
          <div className="loader">
            <BarLoader height={10} color="#E66767" />
          </div>
        </S.HomeContainer>
      </>
    );

  const restaurant = restaurants.find((restaurant) => restaurant.tipo === tipo);

  if (restaurant && !isLoading) {
    return (
      <>
        <HomeBanner
          typeBanner={"foodPage"}
          restaurantTags={restaurant.tipo.charAt(0).toUpperCase() + restaurant.tipo.slice(1)}
          restaurantName={restaurant.titulo}
          restaurantImage={restaurant.capa}
        />
        <S.HomeContainer>
          <div className="container">
            <FoodList type={"foodPage"} cardapio={restaurant.cardapio} />
          </div>
        </S.HomeContainer>
      </>
    );
  }
};
