import styled from "styled-components";
import { colors } from "../../GlobalStyle";

export type FormProps = {
  inputType: "normal" | "double";
};

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${colors.lightBeige};

  h4 {
    margin-bottom: 16px;
    font-size: 16px;
    font-weight: bold;
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

    &:focus {
      border-color: ${colors.beige};
    }
  }

  ${(formProps) =>
    formProps.inputType === "normal"
      ? `
      display: flex;
      flex-direction: column;

      input {
        width: 100%;
      }
    `
      : `
      display: flex;
      gap: 34px;

      .field {
        flex: 1;
        display: flex;
        flex-direction: column;
      }

      input {
        width: 100%;
      }
  `}
`;
