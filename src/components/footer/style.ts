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
`;

export const FooterLinks = styled.ul`
  display: flex;
  margin-top: 32px;
  flex-direction: row;
  justify-content: center;
  gap: 8px;
`;

export const FooterText = styled.p`
  width: 480px;
  font-weight: 400;
  font-size: 10px;
  text-align: center;
`;
