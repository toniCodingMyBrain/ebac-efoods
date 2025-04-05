import styled from "styled-components";

import banner from "../../public/assets/banner.png";

export const FooterContainer = styled.footer`
  background-image: url(${banner});
  padding: 40px 0;
  height: 298px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  img {
    width: 100%;
  }

  @media (max-width: 768px) {
    max-height: 160px;
    padding: 8px 0;

    .footerContainer {
      display: flex;
      flex-direction: column;
      align-items: center;

      .logo {
        width: 90px;
      }

      ul {
        width: 70%;
        margin-top: 12px;
      }
    }
  }
`;

export const FooterLinks = styled.ul`
  display: flex;
  margin-top: 32px;
  flex-direction: row;
  justify-content: center;
  gap: 8px;
`;

export const FooterText = styled.p`
  max-width: 480px;
  font-weight: 400;
  font-size: clamp(0.375rem, 4vw, 0.625rem);
  text-align: center;
`;
