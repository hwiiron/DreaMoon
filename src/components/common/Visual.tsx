import { StyledVisual } from "./Visual.style";

function Visual() {
  return (
    <StyledVisual>
      <video
        src="https://hwiiron.com/DreaMoon.mp4"
        muted
        autoPlay={true}
        loop
      ></video>
    </StyledVisual>
  );
}

export default Visual;
