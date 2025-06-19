import { HomeContainer } from "../home/style";
import { HomeBanner } from "../../components/banner";
import FoodList from "../../components/foodCard";
import { useParams } from "react-router-dom";
import { useGetRestaurantsQuery } from "../../services/api";

export const FoodPage = () => {
  const { tipo } = useParams();

  const { data: restaurants, isLoading } = useGetRestaurantsQuery();
  if (!restaurants) return <h4>Carregando...</h4>;

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
        <HomeContainer>
          <div className="container">
            <FoodList type={"foodPage"} cardapio={restaurant.cardapio} />
          </div>
        </HomeContainer>
      </>
    );
  } else {
    return <h4>Carregando...</h4>;
  }
};
