import { HomeBanner } from "../../components/banner";
import { FoodList } from "../../components/foodList";
import { HomeContainer } from "./style";

export const Home = () => (
  <>
    <HomeBanner typeBanner="home" />
    <HomeContainer>
      <div className="container">
        <FoodList type={"home"} />
      </div>
    </HomeContainer>
  </>
);
