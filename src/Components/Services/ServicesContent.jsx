import React, {useEffect} from "react";
import {
  SectionTitle,
  SectionYear,
  ServicesBox,
  ServicesBoxMobile,
  ServicesContentBox,
  ServicesContentBoxMobile,
  TextBox,
  TitleBar,
  TitleBox,
  TopBar,
  TopBarContentBox,
  YearBox,
  Text,
  LinkBox,
  LinkTo,
  BottomBar,
  ThreeBox,
  BoxTitleBar,
  BoxTitle,
  BoxTextBar,
  BoxText,
} from "./servicesElements";
import Aos from 'aos';
import "aos/dist/aos.css";
import {Parallax} from 'react-scroll-parallax';

const ServicesContent = () => {

    useEffect(() => {
        Aos.init({duration: 2000});
      }, [])

  return (
    <>
      <Parallax x= {[14, -7]}>
      <ServicesBox name="services">
        <ServicesContentBox data-aos="fade-up" data-aos-delay="200">
          <TopBar>
            <TitleBar>
              <TitleBox>
                <SectionTitle data-aos="fade-right" data-aos-delay="500">Services</SectionTitle>
              </TitleBox>
              <YearBox>
                <SectionYear data-aos="fade-right" data-aos-delay="300">2021</SectionYear>
              </YearBox>
            </TitleBar>
            <TopBarContentBox>
              <TextBox data-aos="fade-left" data-aos-delay="300">
                <Text>
                  Concept, interactions, software engeneering, UI & graphics
                  design, creative development.
                </Text>
              </TextBox>
              <LinkBox data-aos="fade-right" data-aos-delay="300">
                <LinkTo>Explore The Works</LinkTo>
              </LinkBox>
            </TopBarContentBox>
          </TopBar>

          <Parallax x= {[-20, 20]}>
          <BottomBar>
            <ThreeBox data-aos="zoom-in">
              <BoxTitleBar>
                <BoxTitle>Websites</BoxTitle>
              </BoxTitleBar>
              <BoxTextBar>
                  <BoxText>Tailored to your needs and for every purpose.</BoxText>
              </BoxTextBar>
            </ThreeBox>
            <ThreeBox data-aos="zoom-in" data-aos-delay="300">
              <BoxTitleBar>
                <BoxTitle>Branding</BoxTitle>
              </BoxTitleBar>
              <BoxTextBar>
                  <BoxText>Building your brand from scratch or carry out its rebranding. Creating the body and soul of your company, which will be a key step in the fight for a strong strategy of maintaining or achieving a high position in the market.</BoxText>
              </BoxTextBar>
            </ThreeBox>
            <ThreeBox data-aos="zoom-in" data-aos-delay="600">
              <BoxTitleBar>
                <BoxTitle>Advertisment</BoxTitle>
              </BoxTitleBar>
              <BoxTextBar>
                  <BoxText>Advertisements are a guaranteed method of reaching an audience. By creating an engaging ad, and spending enough to reach many users, advertisements can have an immediate impact on business.</BoxText>
              </BoxTextBar>
            </ThreeBox>
          </BottomBar>
          </Parallax>
        </ServicesContentBox>
      </ServicesBox>
      </Parallax>

      <ServicesBoxMobile name="services">
        <ServicesContentBoxMobile data-aos="fade-up" data-aos-delay="200">
          <TopBar>
            <TitleBar>
              <TitleBox>
                <SectionTitle data-aos="fade-right" data-aos-delay="500">Services</SectionTitle>
              </TitleBox>
              <YearBox>
                <SectionYear data-aos="fade-right" data-aos-delay="300">2021</SectionYear>
              </YearBox>
            </TitleBar>
            <TopBarContentBox>
              <TextBox data-aos="fade-left" data-aos-delay="300">
                <Text>
                  Concept, interactions, software engeneering, UI & graphics
                  design, creative development.
                </Text>
              </TextBox>
              <LinkBox data-aos="fade-right" data-aos-delay="300">
                <LinkTo>Explore The Works</LinkTo>
              </LinkBox>
            </TopBarContentBox>
          </TopBar>

          <BottomBar>
            <ThreeBox data-aos="zoom-in">
              <BoxTitleBar>
                <BoxTitle>Websites</BoxTitle>
              </BoxTitleBar>
              <BoxTextBar>
                  <BoxText>Tailored to your needs and for every purpose.</BoxText>
              </BoxTextBar>
            </ThreeBox>
            <ThreeBox data-aos="zoom-in" data-aos-delay="300">
              <BoxTitleBar>
                <BoxTitle>Branding</BoxTitle>
              </BoxTitleBar>
              <BoxTextBar>
                  <BoxText>Building your brand from scratch or carry out its rebranding. Creating the body and soul of your company, which will be a key step in the fight for a strong strategy of maintaining or achieving a high position in the market.</BoxText>
              </BoxTextBar>
            </ThreeBox>
            <ThreeBox data-aos="zoom-in" data-aos-delay="600">
              <BoxTitleBar>
                <BoxTitle>Advertisment</BoxTitle>
              </BoxTitleBar>
              <BoxTextBar>
                  <BoxText>Advertisements are a guaranteed method of reaching an audience. By creating an engaging ad, and spending enough to reach many users, advertisements can have an immediate impact on business.</BoxText>
              </BoxTextBar>
            </ThreeBox>
          </BottomBar>
        </ServicesContentBoxMobile>
      </ServicesBoxMobile>
    </>
  );
};

export default ServicesContent;
