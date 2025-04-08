import { createGlobalStyle } from "styled-components";

export const colors = {
  beige: "#FFEBD9",
  lightBeige: "#FFF8F2",
  white: "#f1f1f1",
  rose: "#E66767",
};

export const GlobalCss = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Roboto", sans-serif;
        font-optical-sizing: auto;
        list-style: none;
        text-decoration: none;
    }

    body {
        background-color: ${colors.lightBeige};
        color: ${colors.rose};
        max-width: 1366px;
        width: 100%;

        @media (max-width: 768px){
            width: 100%;
        }
    }

    .container {
        max-width: 1024px;
        width: 100%;
        margin: 0 auto;
    }

    @media (max-width: 768px){
        max-width: 768px;
        width: 100%;
        margin: 0 auto;
    }
`;
