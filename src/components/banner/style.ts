import styled from "styled-components";

import banner from "../../public/assets/banner.png";
import { BannerProps } from ".";

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
  grid-template-columns: 1fr auto 1fr;
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
  max-width: 700px;
  font-weight: 900;
  text-align: center;

  /* @media (min-width: 768px) {
    width: 80%;
  }

  @media (min-width: 1024px) {
    width: 50%;
  } */
`;
