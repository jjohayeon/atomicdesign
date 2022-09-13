import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *, ::after, ::before {
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html {
        position: relative;
    }
    body {
        line-height: 1.5;
    }
`;
