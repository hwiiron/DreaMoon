import styled from "styled-components";

const StyledButton = styled.button`
  background: var(--login-button);
  border-radius: 8px;
  width: 100%;
  color: #fff;
  transition: 0.3s;

  &:hover {
    background: var(--login-button-hover);
  }

  &:disabled {
    background: var(--login-button-disabled);
  }
`;

export { StyledButton };
