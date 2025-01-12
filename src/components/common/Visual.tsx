import { useNavigate } from "react-router-dom";
import { StyledInner } from "../../layout/Inner.style";
import { StyledVisual } from "./Visual.style";

function Visual() {
  const navigate = useNavigate();

  const handleSecretClick = () => {
    navigate("/signin");
  };

  return (
    <StyledInner>
      <StyledVisual>
        <button onClick={handleSecretClick} />
      </StyledVisual>
    </StyledInner>
  );
}

export default Visual;
