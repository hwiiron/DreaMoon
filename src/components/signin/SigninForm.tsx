import { ChangeEvent, useState } from "react";
import Input from "../common/Input";
import Button from "../common/Button";
import {
  StyledSignin,
  StyledSigninWrap,
  StyledLogoWrap,
} from "./SigninForm.style";
import { ERROR_MESSAGE } from "../../constants/messages";
import { useNavigate } from "react-router-dom";

function SigninForm() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [emailValidation, setEmailValidation] = useState(false);
  const [passwordValidation, setPasswordValidation] = useState(false);

  const navigate = useNavigate();

  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailPattern = !pattern.test(values.email.trim());
  const passwordPattern = !(values.password.length > 7);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues((prevValue) => ({
      ...prevValue,
      [name]: value.replace(/\s/g, ""), // 공백 입력 금지
    }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;

    if (name === "email") {
      setEmailValidation(emailPattern);
    } else if (name === "password") {
      setPasswordValidation(passwordPattern);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/myCalendar");
  };

  return (
    <StyledSignin>
      <StyledSigninWrap>
        <StyledLogoWrap to="/">
          <img src="/images/img_Logo_white.svg" alt="DreaMoon" />
        </StyledLogoWrap>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">이메일</label>
            <Input
              type="text"
              name="email"
              id="email"
              placeholder="이메일을 입력해 주세요."
              value={values.email}
              handleChange={handleChange}
              handleBlur={handleBlur}
              error={emailValidation}
              errorMessage={ERROR_MESSAGE.EMAIL_INVALID_FORMAT}
            />
          </div>

          <div>
            <label htmlFor="password">비밀번호</label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="비밀번호를 입력해 주세요."
              value={values.password}
              handleChange={handleChange}
              handleBlur={handleBlur}
              error={passwordValidation}
              errorMessage={ERROR_MESSAGE.PASSWORD_MIN_LENGTH}
            />
          </div>

          <Button
            disabled={emailPattern || passwordPattern}
            onClick={() => console.log("로그인 버튼 클릭!")}
          >
            로그인
          </Button>
        </form>
      </StyledSigninWrap>
    </StyledSignin>
  );
}

export default SigninForm;
