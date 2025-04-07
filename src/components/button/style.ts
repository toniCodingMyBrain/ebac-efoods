import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../GlobalStyle";

export const CardButton = styled(Link)`
  background-color: ${colors.rose};
  color: ${colors.white};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
`;
