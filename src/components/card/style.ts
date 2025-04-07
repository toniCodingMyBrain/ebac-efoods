import styled from "styled-components";
import { colors } from "../../GlobalStyle";

import { FoodCardProps } from ".";
import { TagContainer } from "../tag/style";

export const CardContainer = styled.div`
  width: 472px;
  border: 1px solid ${colors.rose};
`;

export const CardHeader = styled.div<
  Omit<FoodCardProps, "foodName" | "tag" | "description" | "rating">
>`
  background-image: url(${(FoodCardProps) => FoodCardProps.image});
  background-size: cover;
  height: 217px;
  gap: 8px;
  display: flex;
  justify-content: end;

  ${TagContainer} {
    margin-right: 16px;
    margin-top: 16px;
  }
`;
