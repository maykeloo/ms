import React from "react";
import {
  CloseIcon,
  CloseIconBar,
  MobileLinkBar,
  SidebarBox,
  SidebarContent,
} from "./sidebarElements";
import { LinkButton } from "../Header/headerElements";

const Sidebar = ({ isSidebarVisible, changeVisibility }) => {

  const links = ["Home", "About", "Works", "Contact"];
  const link = links.map((link) => (
    <MobileLinkBar key = {link}>
      <LinkButton duration = {3000} smooth = {true} to = {link.toLowerCase()} onClick = {changeVisibility}>{link}</LinkButton>
    </MobileLinkBar>
  ));

  return (
    <>
      <SidebarBox isSidebarVisible={isSidebarVisible}>
        <SidebarContent>
          {link}
          <CloseIconBar>
            <CloseIcon onClick={changeVisibility} />
          </CloseIconBar>
        </SidebarContent>
      </SidebarBox>
    </>
  );
};

export default Sidebar;
