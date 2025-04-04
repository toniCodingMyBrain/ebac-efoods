import styled from "styled-components";

import banner from "../../public/assets/banner.png";

export const BannerContainer = styled.div`
  width: 100%;
  height: 360px;
  background-image: url(${banner});
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const BannerText = styled.p`
  width: 50%;
  font-size: 2.25rem;
  font-weight: 900;
  text-align: center;
`;
