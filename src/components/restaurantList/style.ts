import styled from "styled-components";

interface FoodListStyleProps {
  type: "home" | "foodPage";
}

export const List = styled.ul<FoodListStyleProps>`
  display: grid;
  ${(FoodListStyleProps) =>
    FoodListStyleProps.type === "home"
      ? `
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    column-gap: 5rem;
    row-gap: 48px;
    `
      : `
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    column-gap: 32px;
    row-gap: 32px;
  `}

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    justify-items: center;
    column-gap: 0.875rem;
    row-gap: 0.875rem;
  }
`;
