import styled, { keyframes } from "styled-components";
import { Link } from "react-scroll";
import { MdKeyboardArrowRight } from "react-icons/md";
import { CgMenuRightAlt, CgArrowLongDownR } from "react-icons/cg";


const scrollIconAnim = keyframes`
  0% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
  50% {
    -webkit-transform: translateY(-10px);
            transform: translateY(-10px);           
  }

  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
`;

export const HeaderBox = styled.header`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const HeadBoxCont = styled.div`
  width: 80%;
  height: 90%;
  display: flex;
  position: relative;

  }
`;

//Right Side of Header Section -----------------------------------------------------------

export const RightBox = styled.div`
  width: 60%;
  height: 100%;
  position: absolute;
  right: 0;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;

  @media screen and (max-width: 1200px)
  {
    width: 80vw;
  }
`;


export const ScrollIconBox = styled(Link)`
  position: absolute;
  display: flex;
  flex-direction: column;
  height: 100px;
  justify-content: space-between;
  align-items: center;
  bottom: 30px;
  right: -100px;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const ScrollIcon = styled(CgArrowLongDownR)`
  color: #457b9d;
  font-size: 40px;
  animation: ${scrollIconAnim};
  animation-duration: 2s;
  animation-iteration-count: infinite;
`;

export const ScrollText = styled.span`
  color: #457b9d;
  transform: rotate(-90deg);
  font-size: 13px;
`;

//Left Side of Header Section -----------------------------------------------------------

export const LSHBox = styled.section`
  width: 50%;
  height: 100%;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media screen and (max-width: 1100px) {
    width: 100%;
  }
`;

export const Navbar = styled.nav`
  width: 40%;
  height: 10%;
  display: flex;
  position: fixed;
  top: 10px;
  align-items: center;
  justify-content: space-between;
  z-index: 999;

  @media screen and (max-width: 1200px)
  {
    width: 80%;
  }
`;

export const LogoBox = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Logo = styled(Link)`
  color: #f1faee;
  font-size: 5vh;
  font-family: "Playfair Display", serif;
  font-weight: 700;
  padding-bottom: 10px;
  cursor: pointer;
`;

export const NavbarLinksBox = styled.div`
  flex-grow: 1;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 1100px) {
    display: none;
  }
`;

export const HamburgerMenu = styled.div`
  display: none;

  @media screen and (max-width: 1100px) {
    display: flex;
    width: 40px;
    height: 40px;
    border-radius: 3px;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
  }
`;

export const MenuIcon = styled(CgMenuRightAlt)`
  color: #f1faee;
  font-size: 26px;
`;

export const LinkBox = styled.div`
  width: 20%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LinkButton = styled(Link)`
  color: #f1faee;
  cursor: pointer;
  font-size: 2vh;
  transition: 0.2s;

  &:hover {
    letter-spacing: 8px;
  }
`;

export const ContentBox = styled.div`
  height: 70%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TitleBox = styled.div`
  height: 50%;
  width: 100%;
`;

export const TitleText = styled.h1`
  margin: 0;
  font-size: 6vh;
  font-weight: 900;
  color: #457b9d;

  @media screen and (max-width: 1200px) {
    font-size: 4vh;
  }
`;



export const SmallTitleBox = styled.div`
  height: 40%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-top: 2px solid grey;
`;
export const WelcomeTextBar = styled.div`
  width: 100%;
  height: 40%;
`;

export const WelcomeText = styled.h3`
  color: #1d3557;
  font-size: 2vh;
  font-weight: 400;
`;

export const AboutBar = styled.div`
  width: 100%;
  height: 40%;
`;

export const AboutBox = styled(Link)`
  width: 15%;
  display: flex;
  transition: 0.3s;
  cursor: pointer;
  align-items: center;

  &:hover {
    transform: translateX(10px);
  }
`;

export const AboutText = styled.span`
  font-size: 1.2em;
  color: #F1FAEE;
  font-weight: 300;
`;

export const AboutArrowBox = styled.div`
  height: 25px;
  width: 25px;
  background: #e63946;
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const AboutArrow = styled(MdKeyboardArrowRight)`
  color: white;
  font-size: 25px;
`;
