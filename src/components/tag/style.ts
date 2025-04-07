import styled from "styled-components";
import { colors } from "../../GlobalStyle";

export const TagContainer = styled.div`
  background-color: ${colors.rose};
  max-height: 26px;
  color: ${colors.white};
  padding: 6px 4px;
  text-align: center;
  align-items: center;
  display: inline-block;
  border-radius: 1px;
`;

export const TagText = styled.h3`
  font-size: 0.75rem;
  font-weight: 700;
`;
