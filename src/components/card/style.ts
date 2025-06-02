import styled from "styled-components";
import { colors } from "../../GlobalStyle";

/* import { FoodCardProps } from "."; */
import { TagContainer } from "../tag/style";
import { CardButton } from "../button/style";

interface CardStyleProps {
  type: "home" | "foodPage" | "modal";
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

// ToDo: ajustar o botão preso ao fundo sem precisar definir height para descrição

export const CardBody = styled.div<CardStyleProps>`
  margin-bottom: 8px;
  margin-inline: 8px;
  height: 181px;
  position: relative;

  .btn-home-card {
    position: absolute;
    bottom: 0;
    left: 0;
  }

  ${(CardStyleProps) =>
    CardStyleProps.type === "foodPage"
      ? `
    height: 163px;
    display: flex;
    flex-direction: column;

    ${CardButton} {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
    }
  `
      : ``}

  @media
    (max-width: 768px) {
    margin-bottom: 4px;
    margin-inline: 4px;
  }
`;

export const CardTitle = styled.div<CardStyleProps>`
  display: flex;
  font-weight: bold;
  color: ${(CardStyleProps) => {
    if (CardStyleProps.type === "home") return colors.rose;
    if (CardStyleProps.type === "foodPage" || CardStyleProps.type === "modal")
      return colors.white;
  }};

  ${(CardStyleProps) =>
    CardStyleProps.type === "home"
      ? `
      margin-top: 8px;
  justify-content: space-between;
  font-size: 18px;
  margin-bottom: 16px;
  `
      : `
      margin-top: 8px;
  flex-wrap: wrap;
  font-size: 16px;
  margin-bottom: 8px;
      `}

  @media (max-width: 768px) {
    font-size: 12px;
    margin-bottom: 6px;
  }
`;

export const CardDescription = styled.p<CardStyleProps>`
  font-size: 14px;
  white-space: normal;
  /* Configura o contêiner para exibir como um box com limite de linhas */
  display: -webkit-box;
  /* Limita o texto a 4 linhas */
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  ${(CardStyleProps) =>
    CardStyleProps.type === "home"
      ? `
  color: ${colors.rose};
  font-weight: 400;
  margin-bottom: 16px;
  line-height: 22px;
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
