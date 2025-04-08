import logo from "../../public/assets/logo.png";
import { BannerContainer, BannerText } from "./style";

export const HomeBanner = () => (
  <BannerContainer>
    <a href="/">
      <img src={logo} alt="Efood" />
    </a>
    <BannerText>
      Viva experiências gastronômicas no conforto da sua casa
    </BannerText>
  </BannerContainer>
);

export const RegularBanner = () => (
  <div className="container">
    <h3>Restaurantes</h3>
    <img src={logo} alt="Efood" />
    <h3>0 produto(s) no carrinho</h3>
  </div>
);
