import styled from "styled-components";

const StyledHeader = styled.header`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  margin: 0 auto;
`;

const StyledLogo = styled.h1`
  a {
    border-radius: 6px;
    display: block;
    font-family: var(--logo-font);
    font-size: 30px;
    font-weight: 400;
    padding: 4px 8px 1px;
    transition: 0.3s;
  }

  @media (max-width: 640px) {
    &:hover {
      background: none;
    }
  }
`;

const StyledModeButton = styled.button`
  border-radius: 6px;
  width: 32px;
  height: 32px;
  font-size: 24px;
  transition: 0.3s;
`;

export { StyledHeader, StyledLogo, StyledModeButton };
