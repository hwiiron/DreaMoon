import Link from "next/link";
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
        <StyledLogo>
          <Link href={"/"} />
        </StyledLogo>

        <StyledModeButton onClick={toggleTheme}>
          {isDarkMode ? "☾" : "☀︎"}
        </StyledModeButton>
      </StyledHeader>
    </StyledInner>
  );
}

export default Header;
