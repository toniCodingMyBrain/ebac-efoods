import styled from "styled-components";
import { colors } from "../../GlobalStyle";

/* import { FoodCardProps } from "."; */
import { TagContainer } from "../tag/style";

interface CardStyleProps {
  type: "home" | "foodPage";
  image?: string;
}

export const CardContainer = styled.div<CardStyleProps>`
  width: ${(CardStyleProps) =>
    CardStyleProps.type === "home" ? "472px" : "320px"};
  border: ${(CardStyleProps) =>
    CardStyleProps.type === "home" ? `1px solid ${colors.rose}` : "none"};
  background-color: ${(CardStyleProps) =>
    CardStyleProps.type === "home" ? `${colors.white}` : `${colors.rose}`};
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
`;

export const CardBody = styled.div<CardStyleProps>`
  margin: 8px 8px;
  ${(CardStyleProps) =>
    CardStyleProps.type === "foodPage"
      ? `
    display: flex;
    flex-direction: column;
  `
      : ``}
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
`;

export const CardDescription = styled.p<CardStyleProps>`
  font-size: 14px;
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
`;

export const CardRating = styled.div`
  height: 21px;
  display: flex;
  align-items: center;
  gap: 8px;
`;
