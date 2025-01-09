import { Link } from "react-router-dom";
import { StyledHeader, StyledLogo, StyledModeButton } from "./Header.style";
import { StyledInner } from "./Inner.style";

type HeaderProps = {
  toggleTheme: () => void;
  isDarkMode: boolean;
};

function Header({ toggleTheme, isDarkMode }: HeaderProps) {
  return (
    <StyledInner>
      <StyledHeader>
        <Link to="/">
          <StyledLogo isDarkMode={isDarkMode} />
        </Link>

        <StyledModeButton onClick={toggleTheme}>
          {isDarkMode ? "☾" : "☀︎"}
        </StyledModeButton>
      </StyledHeader>
    </StyledInner>
  );
}

export default Header;
