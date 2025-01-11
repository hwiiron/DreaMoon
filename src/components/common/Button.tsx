import { StyledButton } from "./Button.style";

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  disabled: boolean;
};

function Button({ children, onClick, disabled }: ButtonProps) {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
}

export default Button;
