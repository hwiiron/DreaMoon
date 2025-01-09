import { StyledInner } from "./Inner.style";

type InnerProps = {
  children: React.ReactNode;
};

function Inner({ children }: InnerProps) {
  return <StyledInner>{children}</StyledInner>;
}

export default Inner;
