import logo from "../../public/assets/logo.png";
import { BannerContainer, BannerText } from "./style";

export type BannerProps = {
  typeBanner: "home" | "foodPage";
};

export const HomeBanner = ({ typeBanner }: BannerProps) => {
  if (typeBanner === "home") {
    return (
      <BannerContainer typeBanner={typeBanner}>
        <a href="/">
          <img src={logo} alt="Efood" />
        </a>
        <BannerText typeBanner={typeBanner}>
          Viva experiências gastronômicas no conforto da sua casa
        </BannerText>
      </BannerContainer>
    );
  } else if (typeBanner === "foodPage") {
    return (
      <BannerContainer typeBanner={typeBanner}>
        <BannerText typeBanner={typeBanner}>Restaurante</BannerText>
        <a href="/">
          <img src={logo} alt="Efood" />
        </a>
        <BannerText typeBanner={typeBanner}>
          0 produto(s) no carrinho
        </BannerText>
      </BannerContainer>
    );
  }
};
