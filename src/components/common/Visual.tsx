import { useNavigate } from "react-router-dom";
import { StyledVisual } from "./Visual.style";

function Visual() {
  const navigate = useNavigate();

  const handleSecretClick = () => {
    navigate("/signin");
  };

  return (
    <StyledVisual>
      <button onClick={handleSecretClick} />
    </StyledVisual>
  );
}

export default Visual;
