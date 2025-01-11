import { ChangeEvent, FocusEvent } from "react";
import StyledInput from "./Input.style";

type InputProps = {
  type: string;
  name: string;
  id: string;
  value: string;
  placeholder: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (e: FocusEvent<HTMLInputElement>) => void;
  error?: boolean;
  errorMessage: string;
};

function Input({
  type,
  name,
  id,
  value,
  placeholder,
  handleChange,
  handleBlur,
  error,
  errorMessage,
}: InputProps) {
  return (
    <StyledInput>
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {error ? <span>{errorMessage}</span> : null}
    </StyledInput>
  );
}

export default Input;
