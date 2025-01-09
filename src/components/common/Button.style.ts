import styled from "styled-components";

const StyledButton = styled.button`
  background: var(--login-button);
  border-radius: 6px;
  color: #fff;
  padding: 12px 28px;
  transition: 0.3s;

  &:hover {
    background: var(--login-button-hover);
  }
`;

export { StyledButton };
