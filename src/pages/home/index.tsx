import { HomeBanner } from "../../components/layout/banner";
import { RestaurantList } from "../../components/shared/restaurantList";
import * as S from "./style";

export const Home = () => {
  return (
    <>
      <HomeBanner typeBanner="home" />
      <S.HomeContainer>
        <div className="container">
          <RestaurantList type={"home"} />
        </div>
      </S.HomeContainer>
    </>
  );
};
