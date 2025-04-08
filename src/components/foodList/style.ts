import styled from "styled-components";

interface FoodListStyleProps {
  type: "home" | "foodPage";
}

export const List = styled.ul<FoodListStyleProps>`
  display: grid;
  ${(FoodListStyleProps) =>
    FoodListStyleProps.type === "home"
      ? `
    grid-template-columns: 1fr 1fr;
    column-gap: 80px;
    row-gap: 48px;
    `
      : `
    grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  row-gap: 32px;
  `}
`;
