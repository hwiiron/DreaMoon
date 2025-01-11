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

export { StyledVisual };
