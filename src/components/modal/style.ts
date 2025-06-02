import styled from "styled-components";
import { colors } from "../../GlobalStyle";

export const ModalContainer = styled.div`
  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
  }
`;

export const ModalCard = styled.div`
  position: relative;
  background-color: ${colors.rose};
  padding: 32px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: transparent;
  border: none;
  color: ${colors.white};
  font-size: 16px;
  cursor: pointer;

  &:hover {
    color: ${colors.beige};
  }
`;

export const ModalLayout = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;

  .img-container {
    max-width: 280px;
    height: 280px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .content {
    padding-left: 16px;
  }
`;
