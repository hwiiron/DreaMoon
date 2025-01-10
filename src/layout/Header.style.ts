import styled from "styled-components";

const StyledHeader = styled.header`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
`;

const StyledLogo = styled.h1<{ isDarkMode: boolean }>`
  border-radius: 6px;
  background-image: url("/images/img_Logo.svg");
  background-image: ${({ isDarkMode }) =>
    isDarkMode
      ? "url('/images/img_Logo_dark.svg')"
      : "url('/images/img_Logo_white.svg')"};
  background-repeat: no-repeat;
  background-position: center center;
  width: 106px;
  height: 35px;
  display: block;
  padding: 4px 8px;
  transition: 0.3s;

  &:hover {
    background: ${({ theme }) => theme.backgroundHover};
    background-image: ${({ isDarkMode }) =>
      isDarkMode
        ? "url('/images/img_Logo_dark.svg')"
        : "url('/images/img_Logo_white.svg')"};
    background-repeat: no-repeat;
    background-position: center center;
  }
`;

const StyledModeButton = styled.button`
  border-radius: 6px;
  width: 32px;
  height: 32px;
  font-size: 24px;
  transition: 0.3s;
`;

const StyledSignin = styled.div`
  display: flex;
  gap: 24px;

  a {
    font-weight: 500;
    color: var(---white);
    transition: 0.3s;
  }
`;

export { StyledHeader, StyledLogo, StyledModeButton, StyledSignin };
