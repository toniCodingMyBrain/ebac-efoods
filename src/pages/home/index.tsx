import { HomeBanner } from "../../components/layout/banner";
import { RestaurantList } from "../../components/shared/restaurantList";
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
