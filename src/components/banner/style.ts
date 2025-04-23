import styled from "styled-components";

import banner from "../../public/assets/banner.png";

import { BannerProps } from ".";
import { colors } from "../../GlobalStyle";

export const BannerContainer = styled.div<BannerProps>`
  ${(IBannerProps) =>
    IBannerProps.typeBanner === "home"
      ? `
  height: 360px;
  background-image: url(${banner});
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0;
  `
      : `
  background-image: url(${banner});
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  padding: 82px 0;
  align-items: center;
  text-align: center;
  `}

  @media (max-width: 768px) {
    height: 160px;
    padding: 8px 0;

    img {
      width: 90px;
    }
  }
`;

export const BannerText = styled.p<BannerProps>`
  /**
  * * Não acompanhava o tamanho do screen 
  * !-width: 50%;
  * !-font-size: 2.25rem; 
  */
  ${(IBannerProps) =>
    IBannerProps.typeBanner === "home"
      ? `
      font-size: clamp(1rem, 4vw, 2.25rem);
      padding: 0 20px;
      margin: 0 auto;
      `
      : `
      font-size: clamp(0.450rem, 4vw, 1.125rem);
    `}
  letter-spacing: 0%;
  max-width: 700px;
  font-weight: 900;
  text-align: center;
`;

export const BannerImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.5);
  z-index: 1;
`;

export const SubBannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 280px;

  .content {
    height: 100%;
    position: relative;
    z-index: 2;
    color: ${colors.white};
    padding-left: 12%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size: 2rem;

    .tag {
      font-weight: lighter;
      letter-spacing: 0%;
    }

    .foodName {
      font-weight: 900;
    }

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 768px) {
    height: 180px;
  }
`;
