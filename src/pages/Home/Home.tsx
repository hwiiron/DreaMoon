// import { message } from "antd";
import { StyledInner } from "../../layout/Inner.style";
import Visual from "../../components/common/Visual";
import {
  StyledButton,
  StyledButtonWrap,
} from "../../components/common/Button.style";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  // const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();

  const handleLoginClick = () => {
    // messageApi.open({
    //   type: "warning",
    //   content: "로그인 기능 준비 중입니다.",
    // });
    navigate("/signin");
  };

  return (
    <>
      {/* {contextHolder} */}

      <StyledInner>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.3,
          }}
        >
          <Visual />
        </motion.div>

        <StyledButtonWrap>
          <StyledButton onClick={handleLoginClick}>로그인</StyledButton>
        </StyledButtonWrap>
      </StyledInner>
    </>
  );
}

export default Home;
