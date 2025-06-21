import { HomeBanner } from "../../components/banner";
import { RestaurantList } from "../../components/restaurantList";
import { HomeContainer } from "./style";

export const Home = () => {
  return (
    <>
      <HomeBanner typeBanner="home" />
      <HomeContainer>
        <div className="container">
          <RestaurantList type={"home"} />
        </div>
      </HomeContainer>
    </>
  );
};
