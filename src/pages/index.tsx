import { StyledInner } from "@/components/common/Inner.style";
import {
  StyledButtonWrap,
  StyledButton,
} from "../components/common/Button.style";
import Visual from "@/components/common/Visual";

function Home() {
  const handleLoginClick = () => {
    console.log("로그인 버튼 클릭!");
  };

  return (
    <StyledInner>
      <Visual />

      <StyledButtonWrap>
        <StyledButton onClick={handleLoginClick}>로그인</StyledButton>
      </StyledButtonWrap>
    </StyledInner>
  );
}

export default Home;
