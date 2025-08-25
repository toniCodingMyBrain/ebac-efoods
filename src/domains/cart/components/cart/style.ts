import styled from "styled-components";
import { colors } from "../../../../GlobalStyle";
import { CardButton } from "../../../../components/layout/button/style";

import trashIcon from "../../../../public/icons/trash.png";

export type FormProps = {
  inputRowType?: "normal" | "grid" | "double";
};

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 2;

  opacity: 0;
  pointer-events: none;
  transition: opacity 0.4s ease;

  &.is-open {
    opacity: 1;
    pointer-events: all;
  }
`;

export const CartSidebar = styled.aside`
  background-color: ${colors.rose};
  max-width: 360px;
  width: 100%;
  padding: 32px 8px 0 8px;
  z-index: 1;

  ${CardButton} {
    display: block;
    width: 100%;
  }

  //* Adicionando rolagem e tirando a scroll-bar da lista de itens no carrinho
  ul {
    max-height: 80vh;
    overflow-y: auto;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const CartItem = styled.li`
  display: flex;
  padding: 8px 8px;
  background-color: ${colors.beige};
  position: relative;
  margin-bottom: 40px;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  button {
    background-image: url(${trashIcon});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-color: transparent;
    border: none;
    position: absolute;
    width: 16px;
    height: 16px;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }

  h4 {
    max-width: 225px;
    font-size: 18px;
    font-weight: 900;
    color: ${colors.rose};
    margin-bottom: 16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    color: ${colors.rose};
  }
`;

export const BuyInfos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${colors.beige};
  margin-bottom: 16px;

  h4 {
    font-size: 14px;
    font-weight: 700;
  }
`;

export const FormContainer = styled.div`
  color: ${colors.lightBeige};

  h4 {
    margin-bottom: 16px;
    font-size: 16px;
    font-weight: bold;
  }

  .button-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 24px;
  }
`;

export const RowBlock = styled.div<FormProps>`
  margin-bottom: 8px;

  label {
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 600;
  }

  input {
    height: 32px;
    font-size: 14px;
    color: #4b4b4b;
    outline: none;
    border: 3px solid ${colors.rose};
    border-radius: 2px;
    padding: 6px 0 6px 0;

    width: 100%;

    &:focus {
      border-color: ${colors.beige};
    }
  }

  ${(formProps) =>
    formProps.inputRowType === "double"
      ? `display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 34px;
    `
      : formProps.inputRowType === "grid"
      ? `
      display: grid;
      grid-template-columns: 3fr 1fr;
      gap: 34px;
  `
      : `
    display: flex;
    flex-direction: column; 
  `}
`;

export const FinishedOrder = styled.div`
  color: ${colors.white};

  div {
    margin-bottom: 24px;

    p {
      font-size: 14px;
      margin-top: 16px;
    }
  }
`;
