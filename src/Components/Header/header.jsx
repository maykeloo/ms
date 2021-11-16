import React from "react";
import { HeaderBox, HeadBoxCont } from "./headerElements";
import LeftSideOfHeader from "./leftSideOfHeader";
import RightSideOfHeader from "./rightSideOfHeader";

const Header = ({ changeVisibility }) => {
  return (
    <>
      <HeaderBox>
        <HeadBoxCont>
          <LeftSideOfHeader changeVisibility={changeVisibility} />
          <RightSideOfHeader />
        </HeadBoxCont>
      </HeaderBox>
    </>
  );
};

export default Header;
