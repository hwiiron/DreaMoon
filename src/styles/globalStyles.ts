import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
    transition: 0.3s;
  }

  a,
  button {
    color: ${({ theme }) => theme.color};
  }

  a:hover,
  button:hover {
    background: ${({ theme }) => theme["background-hover"]};
  }
`;
