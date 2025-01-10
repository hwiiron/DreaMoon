import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
    transition: 0.3s;
  }

  button {
    color: ${({ theme }) => theme.color};
  }

  button:hover {
    background: ${({ theme }) => theme.backgroundHover};
  }
`;
