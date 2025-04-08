import { HomeBanner } from "../../components/banner";
import { FoodList } from "../../components/foodList";
import { FoodItems } from "../../models/FoodItems";
import { HomeContainer } from "./style";

export const Home = () => (
  <>
    <HomeBanner typeBanner="home" />
    <HomeContainer>
      <div className="container">
        <FoodList type={"home"} foods={FoodItems} />
      </div>
    </HomeContainer>
  </>
);
