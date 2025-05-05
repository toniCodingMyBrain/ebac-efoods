import styled from "styled-components";

import banner from "../../public/assets/banner.png";

import { BannerProps } from ".";
import { colors } from "../../GlobalStyle";

export const BannerContainer = styled.div<BannerProps>`
  background-image: url(${banner});
  position: relative;

  ${(IBannerProps) =>
    IBannerProps.typeBanner === "home"
      ? `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 40px 0;
    `
      : `
    padding: 136px 0;

    .content {
    max-width: 1024px;
    margin: 0 auto;
    display: flex;
    flex-direction: row; 
    justify-content: space-between;
    align-items: center;
    text-align: center;

    .logo {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      }
    }
  `}

  @media (max-width: 1056px) {
    .content {
      width: 90%;
    }
  }

  @media (max-width: 768px) {
    padding: 48px 16px;

    .content {
      width: 90%;
      flex-direction: column;

      a > img {
        width: 90px;
        padding: 8px 12px;
      }
    }
  }

  @media (max-width: 640px) {
    .content {
      width: 60%;
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
      `
      : `
      font-size: clamp(0.450rem, 4vw, 1.125rem);
    `}
  letter-spacing: 0%;
  font-weight: 900;
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

    @media (max-width: 1056px) {
      width: 90%;
    }

    @media (max-width: 768px) {
      width: 90%;
      font-size: 1.2rem;
    }
  }

  @media (max-width: 768px) {
    height: 180px;
  }
`;
