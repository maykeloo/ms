import styled from "styled-components";
import { CgCloseR } from "react-icons/cg";

export const SidebarBox = styled.div`
  position: fixed;
  width: 100%;
  height: 50%;
  overflow: hidden;
  transform-origin: center;
  z-index: 999;
  transition: 1s;
  top: ${(props) => (props.isSidebarVisible ? "0" : "-150%")};
  background-color: #2A9D8F;
  box-shadow: 0px 0px 24px 0px #134b44;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SidebarContent = styled.div`
  width: 80%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const MobileLinkBar = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CloseIconBar = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CloseIcon = styled(CgCloseR)`
  font-size: 20px;
`;
