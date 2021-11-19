import React, {useEffect} from "react";
import {
  AboutArrow,
  AboutArrowBox,
  AboutBar,
  AboutBox,
  AboutText,
  ContentBox,
  HamburgerMenu,
  LinkBox,
  LinkButton,
  Logo,
  LogoBox,
  LSHBox,
  MenuIcon,
  Navbar,
  NavbarLinksBox,
  SmallTitleBox,
  TitleBox,
  TitleText,
  TitleTextMobile,
  WelcomeText,
  WelcomeTextBar,
} from "./headerElements";
import Typewriter from "typewriter-effect";
import Aos from 'aos';
import "aos/dist/aos.css";

const LeftSideOfHeader = ({ changeVisibility }) => {
  const links = ["Home", "About", "Works", "Contact"];
  const link = links.map((link) => (
    <LinkBox key = {link}>
      <LinkButton duration = {3000} smooth = {true} to = {link.toLowerCase()}>{link}</LinkButton>
    </LinkBox>
  ));

  useEffect(() => {
    Aos.init({duration: 2000});
  }, [])



  return (
    <>
      <LSHBox>
        <Navbar>
          <LogoBox data-aos="fade-right" data-aos-delay="500">
            <Logo duration = {3000} smooth = {true} to = 'home'>ms</Logo>
          </LogoBox>
          <NavbarLinksBox data-aos="fade-right" data-aos-delay="300">{link}</NavbarLinksBox>
          <HamburgerMenu onClick={changeVisibility} data-aos="fade-left" data-aos-delay="300">
            <MenuIcon />
          </HamburgerMenu>
        </Navbar>
        <ContentBox>
          <TitleBox data-aos="fade-up" data-aos-delay="300">
            <TitleText>
              <Typewriter
                options={{
                  strings: [`Everybody kills boredom in a different way. Mine is the front-end`],
                  autoStart: true,
                  loop: true,
                  delay: 100,
                }}
              />
            </TitleText>
            <TitleTextMobile>
            Everybody kills boredom in a different way. Mine is the front-end
            </TitleTextMobile>
          </TitleBox>
          <SmallTitleBox data-aos="fade-left" data-aos-delay="300">
            <WelcomeTextBar>
              <WelcomeText data-aos="fade-left" data-aos-delay="300">I am glad you are here.</WelcomeText>
            </WelcomeTextBar>
            <AboutBar>
              <AboutBox to = 'about' smooth = {true} duration = {3000}>
                <AboutText>about</AboutText>
                <AboutArrowBox>
                  <AboutArrow />
                </AboutArrowBox>
              </AboutBox>
            </AboutBar>
          </SmallTitleBox>
        </ContentBox>
      </LSHBox>
    </>
  );
};

export default LeftSideOfHeader;
