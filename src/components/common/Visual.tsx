import { StyledVisual } from "./Visual.style";

function Visual() {
  return (
    <StyledVisual>
      <video
        src="../../public/video/video_visual.mp4"
        muted
        autoPlay={true}
      ></video>
    </StyledVisual>
  );
}

export default Visual;
