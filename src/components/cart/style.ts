import styled from "styled-components";
import { colors } from "../../GlobalStyle";
import { CardButton } from "../button/style";

import trashIcon from "../../public/icons/trash.png";

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: none;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 2;

  &.is-open {
    display: flex;
    flex: 1;
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
