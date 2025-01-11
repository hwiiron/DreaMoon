import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledSignin = styled.div`
  background: var(--white);
  width: 1200px;
  height: 720px;
  position: absolute;
  top: 40px;
  right: 100px;
`;

const StyledSigninWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 480px;
  height: auto;
  margin: 170px auto 0;

  div + div {
    margin-top: 24px;
  }

  button {
    height: 50px;
    margin-top: 24px;
  }
`;

const StyledLogoWrap = styled(Link)`
  display: block;
  width: 200px;
  height: 43px;
  margin: 0 auto 50px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export { StyledSignin, StyledSigninWrap, StyledLogoWrap };
