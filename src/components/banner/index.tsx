import logo from "../../public/assets/logo.png";

import {
  BannerContainer,
  BannerImage,
  BannerText,
  SubBannerContainer,
} from "./style";

export type BannerProps = {
  typeBanner: "home" | "foodPage";
  restaurantTags?: string;
  restaurantName?: string;
  restaurantImage?: string;
};

export const HomeBanner = ({
  typeBanner,
  restaurantTags,
  restaurantName,
  restaurantImage,
}: BannerProps) => {
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
      <>
        <BannerContainer typeBanner={typeBanner}>
          <div className="content">
            <BannerText typeBanner={typeBanner}>Restaurante</BannerText>
            <a href="/" className="logo">
              <img src={logo} alt="Efood" />
            </a>
            <BannerText typeBanner={typeBanner}>
              0 produto(s) no carrinho
            </BannerText>
          </div>
        </BannerContainer>
        <SubBannerContainer>
          <BannerImage src={restaurantImage} alt={restaurantName} />
          <div className="content container">
            <h3 className="tag">{restaurantTags}</h3>
            <h3 className="restaurantName">{restaurantName}</h3>
          </div>
        </SubBannerContainer>
      </>
    );
  }
};
