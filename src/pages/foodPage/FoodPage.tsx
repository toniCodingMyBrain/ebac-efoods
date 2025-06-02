import { HomeContainer } from "../home/style";
import { HomeBanner } from "../../components/banner";
import { Restaurant } from "../../api/get-restaurants";
import FoodList from "../../components/foodCard";
import useRestaurantsContext from "../../api/context/use-restaurants-context";

type FoodPageProps = {
  restaurant: Restaurant;
};

export const FoodPage = ({ restaurant }: FoodPageProps) => {
  const { getCardapioById } = useRestaurantsContext();
  const restaurantCardapio = getCardapioById(restaurant.id);

  return (
    <>
      <HomeBanner
        typeBanner={"foodPage"}
        restaurantTags={
          restaurant.tipo.charAt(0).toUpperCase() + restaurant.tipo.slice(1)
        }
        restaurantName={restaurant.titulo}
        restaurantImage={restaurant.capa}
      />
      <HomeContainer>
        <div className="container">
          <FoodList type={"foodPage"} cardapio={restaurantCardapio} />
        </div>
      </HomeContainer>
    </>
  );
};
