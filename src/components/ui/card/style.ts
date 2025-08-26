import styled from "styled-components";
import { colors } from "../../../GlobalStyle";

/* import { FoodCardProps } from "."; */
import { TagContainer } from "../tag/style";
import { CardButton } from "../../layout/button/style";

interface CardStyleProps {
  type: "home" | "foodPage" | "modal";
  image?: string;
}

export const CardContainer = styled.div<CardStyleProps>`
  position: relative;

  max-width: ${(CardStyleProps) => (CardStyleProps.type === "home" ? "472px" : "320px")};
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
      margin: 8px 8px 0 8px;
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

// ToDo: ajustar o botão preso ao fundo sem precisar definir height para descrição

export const CardBody = styled.div<CardStyleProps>`
  padding: 8px 8px;
  //max-height: 181px;

  .btn-home-card {
    margin-top: 16px;
    display: flex;

    ${CardButton} {
      justify-content: flex-start;
    }
  }

  ${(CardStyleProps) =>
    CardStyleProps.type === "foodPage"
      ? `
    padding-top: 0;  

    ${CardButton} {
      display: block;
      width: 100%;
    }
  `
      : ``}
`;

export const CardTitle = styled.div<CardStyleProps>`
  display: flex;
  font-weight: bold;

  color: ${(CardStyleProps) => {
    if (CardStyleProps.type === "home") return colors.rose;
    if (CardStyleProps.type === "foodPage" || CardStyleProps.type === "modal") return colors.white;
  }};

  margin-top: ${(CardStyleProps) => {
    if (CardStyleProps.type === "home" || CardStyleProps.type === "foodPage") return "8px";
    if (CardStyleProps.type === "modal") return "0";
  }};

  margin-bottom: ${(CardStyleProps) => {
    if (CardStyleProps.type === "home" || CardStyleProps.type === "modal") return "16px";
    if (CardStyleProps.type === "foodPage") return "8px";
  }};

  font-size: ${(CardStyleProps) => {
    if (CardStyleProps.type === "home" || CardStyleProps.type === "modal") return "18px";
    if (CardStyleProps.type === "foodPage") return "16px";
  }};

  ${(CardStyleProps) => {
    if (CardStyleProps.type === "home") return "justify-content: space-between;";
    if (CardStyleProps.type === "foodPage") return "flex-wrap: wrap;";
  }};

  @media (max-width: 768px) {
    font-size: 12px;
    margin-bottom: 6px;
  }
`;

export const CardDescription = styled.p<CardStyleProps>`
  margin-bottom: 16px;
  line-height: 22px;
  font-weight: 400;
  position: relative;

  ${(CardStyleProps) => {
    if (CardStyleProps.type !== "modal")
      return `
  font-size: 14px;
  white-space: normal;
  /* Configura o contêiner para exibir como um box com limite de linhas */
  display: -webkit-box;
  /* Limita o texto a 4 linhas */
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  `;
  }};

  ${(CardStyleProps) =>
    CardStyleProps.type === "home"
      ? `
  color: ${colors.rose};
  `
      : `
  color: ${colors.white};
      `}

  @media (max-width: 768px) {
    height: 70%;
    font-size: 10px;
    line-height: 100%;
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
