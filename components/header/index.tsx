import { FC } from "react";
import styled from "styled-components";
import FlexContainer from "@/shared/flex-container";
import SearchField from "./search-field";
import Link from "next/link";

const HeaderWrapper = styled(FlexContainer)`
  padding: 10px;
  border-bottom: 3px solid black;
  align-items: flex-end;
  justify-content: space-between;
  letter-spacing: 3px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const HeaderLogo = styled.h2`
  margin: 0;
  text-align: center;
  cursor: pointer;
`;

const Header: FC = () => {
  return (
    <HeaderWrapper>
      <Link href="/">
        <HeaderLogo>
          WOOKIE
          <br />
          MOVIES
        </HeaderLogo>
      </Link>
      <SearchField />
    </HeaderWrapper>
  );
};

export default Header;
