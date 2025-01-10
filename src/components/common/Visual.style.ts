import styled from "styled-components";

const StyledVisual = styled.div`
  background: url("/images/img_visual.jpg") no-repeat center;
  background-size: cover;
  box-shadow: 15px 15px 20px 0 rgba(0, 0, 0, 0.3);
  width: 1200px;
  height: 720px;
  overflow: hidden;
  position: absolute;
  top: 40px;
  right: 100px;

  button {
    border-radius: 100%;
    width: 165px;
    height: 165px;
    position: absolute;
    bottom: 242px;
    left: 325px;
  }

  button:hover {
    background: none;
  }
`;

const StyledSignin = styled.div`
  background: var(--white);
  width: 1200px;
  height: 720px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 40px;
  right: 100px;
`;

const StyledSigninWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 480px;
  height: auto;

  div + div {
    margin-top: 24px;
  }

  label {
    display: inline-block;
    color: var(--black);
    margin-bottom: 8px;
  }

  input {
    border-radius: 8px;
    border: 1px solid var(--input-border);
    width: 100%;
    height: 50px;
    padding: 0 16px;
  }

  input:focus {
    outline: none;
    border: 1px solid var(--input-focus);
  }

  input::placeholder {
    font-weight: 300;
    color: var(--placeholder-color);
  }

  button {
    border-radius: 8px;
    background: var(--login-button);
    height: 50px;
    margin-top: 24px;
  }
`;

const StyledImgWrap = styled.div`
  width: 200px;
  height: 43px;
  margin: 0 auto 50px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export { StyledVisual, StyledSignin, StyledImgWrap, StyledSigninWrap };
