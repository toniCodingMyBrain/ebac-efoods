import { useDispatch, useSelector } from "react-redux";
import logo from "../../../public/assets/logo.png";

import * as S from "./style";
import { openCart } from "../../../store/reducers/cart-reducer";
import { RootReducer } from "../../../store";

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
  const { food } = useSelector((state: RootReducer) => state.cart);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(openCart());
  };

  if (typeBanner === "home") {
    return (
      <S.BannerContainer typeBanner={typeBanner}>
        <a href="/">
          <img src={logo} alt="Efood" />
        </a>
        <S.BannerText typeBanner={typeBanner}>
          Viva experiências gastronômicas no conforto da sua casa
        </S.BannerText>
      </S.BannerContainer>
    );
  } else if (typeBanner === "foodPage") {
    return (
      <>
        <S.BannerContainer typeBanner={typeBanner}>
          <div className="content">
            <S.BannerText typeBanner={typeBanner}>Restaurante</S.BannerText>
            <a href="/" className="logo">
              <img src={logo} alt="Efood" />
            </a>
            <S.BannerText role="button" typeBanner={typeBanner} onClick={handleClick}>
              {food.length > 1
                ? `${food.length} produtos no carrinho`
                : food.length == 0
                ? "Carrinho vazio"
                : "1 produto no carrinho"}
            </S.BannerText>
          </div>
        </S.BannerContainer>
        <S.SubBannerContainer>
          <S.BannerImage src={restaurantImage} alt={restaurantName} />
          <div className="content container">
            <h3 className="tag">{restaurantTags}</h3>
            <h3 className="restaurantName">{restaurantName}</h3>
          </div>
        </S.SubBannerContainer>
      </>
    );
  }
};
