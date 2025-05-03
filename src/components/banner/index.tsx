import logo from "../../public/assets/logo.png";
import spagettiBanner from "../../public/assets/spagetti_banner.png";

import {
  BannerContainer,
  BannerImage,
  BannerText,
  SubBannerContainer,
} from "./style";

export type BannerProps = {
  typeBanner: "home" | "foodPage";
  foodTags?: string;
  foodName?: string;
};

export const HomeBanner = ({ typeBanner, foodTags, foodName }: BannerProps) => {
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
            <a href="/">
              <img src={logo} alt="Efood" />
            </a>
            <BannerText typeBanner={typeBanner}>
              0 produto(s) no carrinho
            </BannerText>
          </div>
        </BannerContainer>
        <SubBannerContainer>
          <BannerImage src={spagettiBanner} alt="" />
          <div className="content container">
            <h3 className="tag">{foodTags}</h3>
            <h3 className="foodName">{foodName}</h3>
          </div>
        </SubBannerContainer>
      </>
    );
  }
};
