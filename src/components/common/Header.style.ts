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
    width: 106px;
    height: 35px;
    background-image: url("/images/img_Logo.svg");
    background-repeat: no-repeat;
    background-position: center;
    display: block;
    padding: 4px 8px 1px;
    transition: 0.3s;
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
