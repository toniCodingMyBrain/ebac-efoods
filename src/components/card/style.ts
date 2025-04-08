import styled from "styled-components";
import { colors } from "../../GlobalStyle";

/* import { FoodCardProps } from "."; */
import { TagContainer } from "../tag/style";

interface CardStyleProps {
  type: "home" | "foodPage";
  image?: string;
}

export const CardContainer = styled.div<CardStyleProps>`
  max-width: ${(CardStyleProps) =>
    CardStyleProps.type === "home" ? "472px" : "320px"};
  border: ${(CardStyleProps) =>
    CardStyleProps.type === "home" ? `1px solid ${colors.rose}` : "none"};
  background-color: ${(CardStyleProps) =>
    CardStyleProps.type === "home" ? `${colors.white}` : `${colors.rose}`};

  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const CardHeader = styled.div<CardStyleProps>`
  ${(CardStyleProps) =>
    CardStyleProps.type === "home"
      ? `background-image: url(${CardStyleProps.image});
      background-size: cover;
      height: 217px;
      gap: 8px;
      display: flex;
      justify-content: end;
      ${TagContainer} {
          margin-right: 16px;
          margin-top: 16px;
      }`
      : /**
         * ? separação de tipos de cards
         */
        `background-image: url(${CardStyleProps.image});
      background-size: cover;
      margin: 8px;
      background-color: ${colors.rose};
      height: 167px;`};

  @media (max-width: 768px) {
    height: 151px;

    ${TagContainer} {
      margin-right: 6px;
      margin-top: 6px;
    }
  }
`;

export const CardBody = styled.div<CardStyleProps>`
  margin-bottom: 8px;
  margin-left: 8px;
  ${(CardStyleProps) =>
    CardStyleProps.type === "foodPage"
      ? `
    display: flex;
    flex-direction: column;
  `
      : ``}

  @media (max-width: 768px) {
    margin-bottom: 4px;
    margin-left: 4px;
  }
`;

export const CardTitle = styled.div<CardStyleProps>`
  display: flex;
  font-weight: bold;
  ${(CardStyleProps) =>
    CardStyleProps.type === "home"
      ? `
  justify-content: space-between;
  font-size: 18px;
  color: ${colors.rose};
  margin-bottom: 16px;
  `
      : `
  flex-wrap: wrap;
  font-size: 16px;
  color: ${colors.white};
  margin-bottom: 8px;
      `}

  @media (max-width: 768px) {
    font-size: 12px;
    margin-bottom: 6px;
  }
`;

export const CardDescription = styled.p<CardStyleProps>`
  font-size: 14px;
  height: 88px;
  ${(CardStyleProps) =>
    CardStyleProps.type === "home"
      ? `
  color: ${colors.rose};
  font-weight: 400;
  margin-bottom: 16px;
  `
      : `
  color: ${colors.white};
  font-weight: 400;
  margin-bottom: 16px;
  line-height: 22px;
      `}
  @media (max-width: 768px) {
    height: 70%;
    font-size: 8px;
    margin-bottom: 8px;
  }
`;

export const CardRating = styled.div`
  height: 21px;
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 768px) {
    height: 14px;
    gap: 4px;

    img {
      height: 14px;
    }
  }
`;
