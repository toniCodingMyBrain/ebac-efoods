import styled from "styled-components";
import { colors } from "../../GlobalStyle";

import { FoodCardProps } from ".";
import { TagContainer } from "../tag/style";

export const CardContainer = styled.div`
  width: 472px;
  border: 1px solid ${colors.rose};
  background-color: ${colors.white};
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

export const CardBody = styled.div`
  margin: 8px 8px;
`;

export const CardTitle = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  font-weight: bold;
  color: ${colors.rose};
  margin-bottom: 16px;
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
