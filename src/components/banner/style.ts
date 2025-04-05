import styled from "styled-components";

import banner from "../../public/assets/banner.png";

export const BannerContainer = styled.div`
  height: 360px;
  background-image: url(${banner});
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    height: 160px;
    padding: 8px 0;

    img {
      width: 90px;
    }
  }
`;

export const BannerText = styled.p`
  /**
  * * Não acompanhava o tamanho do screen 
  * !-width: 50%;
  * !-font-size: 2.25rem; 
  */
  max-width: 700px;
  font-size: clamp(1rem, 4vw, 2.25rem);
  font-weight: 900;
  text-align: center;
  margin: 0 auto;
  padding: 0 20px;

  /* @media (min-width: 768px) {
    width: 80%;
  }

  @media (min-width: 1024px) {
    width: 50%;
  } */
`;
