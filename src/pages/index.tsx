import { StyledInner } from "@/components/common/Inner.style";
import { StyledVisual } from "./index.style";
import {
  StyledButtonWrap,
  StyledButton,
} from "../components/common/Button.style";

function Home() {
  const handleLoginClick = () => {
    console.log("로그인 버튼 클릭!");
  };

  return (
    <StyledInner>
      <StyledVisual />

      <StyledButtonWrap>
        <StyledButton onClick={handleLoginClick}>로그인</StyledButton>
      </StyledButtonWrap>
    </StyledInner>
  );
}

export default Home;
