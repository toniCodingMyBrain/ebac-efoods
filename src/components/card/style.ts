import styled from "styled-components";
import { colors } from "../../GlobalStyle";

/* import { FoodCardProps } from "."; */
import { TagContainer } from "../tag/style";

interface CardStyleProps {
  type: "home" | "foodPage";
  image?: string;
}

export const CardContainer = styled.div<CardStyleProps>`
  width: ${(props) =>
    props.type === "home" ? "472px" : "320px"};
  border: ${(props) =>
    props.type === "home" ? `1px solid ${colors.rose}` : "none"};
  background-color: ${(props) =>
    props.type === "home" ? `${colors.white}` : `${colors.rose}`};
`;

export const CardHeader = styled.div<CardStyleProps>`
  ${(props) =>
    props.type === "home"
      ? `background-image: url(${props.image});
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
        `background-image: url(${props.image});
      background-size: cover;
      margin: 8px;
      background-color: ${colors.rose};
      height: 167px;`};
`;

export const CardBody = styled.div`
  margin: 8px 8px;
`;

export const CardTitle = styled.div<CardStyleProps>`
  display: flex;
  font-weight: bold;
  ${(props) =>
    props.type === "home"
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

export const CardDescription = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 16px;
`;

export const CardRating = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
