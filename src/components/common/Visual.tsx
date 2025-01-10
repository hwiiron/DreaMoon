import { useState } from "react";
import {
  StyledVisual,
  StyledSignin,
  StyledImgWrap,
  StyledSigninWrap,
} from "./Visual.style";
import Button from "./Button";

function Visual() {
  const [secretSignin, setSecretSignin] = useState(true);

  const handleSecretClick = () => {
    setSecretSignin(!secretSignin);
  };

  return (
    <>
      {secretSignin ? (
        <StyledVisual>
          <button onClick={handleSecretClick} />
        </StyledVisual>
      ) : (
        <StyledSignin>
          <StyledSigninWrap>
            <StyledImgWrap>
              <img src="public/images/img_Logo_white.svg" alt="DreaMoon" />
            </StyledImgWrap>

            <div>
              <label htmlFor="email">이메일</label>
              <input
                type="text"
                id="email"
                placeholder="이메일을 입력해 주세요."
              />
            </div>

            <div>
              <label htmlFor="password">비밀번호</label>
              <input
                type="text"
                id="password"
                placeholder="비밀번호를 입력해 주세요."
              />
            </div>

            <Button onClick={() => console.log("로그인 버튼 클릭!")}>
              로그인
            </Button>
          </StyledSigninWrap>
        </StyledSignin>
      )}
    </>
  );
}

export default Visual;
