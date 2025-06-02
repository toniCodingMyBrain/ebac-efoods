import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../GlobalStyle";

interface ButtonProps {
  typeButton: string;
}

export const CardButton = styled(Link)<ButtonProps>`
  ${(ButtonProps) =>
    ButtonProps.typeButton === "primary"
      ? `
      background-color: ${colors.rose};
      color: ${colors.white};
      padding: 4px 6px;`
      : `
      background-color: ${colors.beige};
      color: ${colors.rose};
      padding: 4px 6px;
      text-align: center;
      `}
  font-size: 14px;
  font-weight: bold;

  @media (max-width: 768px) {
    padding: 2px 2px;
    font-size: 12px;
  }
`;
