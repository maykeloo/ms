import React, { useEffect } from "react";
import {
  Box1Image,
  Box1,
  TextBox,
  Date,
  WorkTitle,
  WorkDescription,
  ShowMoreBar,
  TextShow,
  LinkArrow,
  LeftSide,
  Box2,
  Box3,
  TopBar,
  Box2Content,
  Box3Content,
  BottomBar,
  Box4,
  Box4Content,
  Box5,
  Box5Content,
  Box5Box,
} from "./worksElements";
import Aos from "aos";
import "aos/dist/aos.css";
import gitfinder from "../../images/gitfinder.png";
import tipCalc from "../../images/tipCalc.png";
import weather from "../../images/weatherapp.png";
import portfolio from "../../images/portfolio.png";
const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <Box1 data-aos="fade-up" data-aos-delay="200">
        <Box1Image src={gitfinder} />
        <TextBox>
          <Date>June, 2021</Date>
          <WorkTitle>Gitfinder</WorkTitle>
          <WorkDescription>
            Tool for finding and showing information about GitHub users. It is
            based on the API. It allows you to use two brightness modes.
            Application shows the most important information about the searched
            GitHub user. Find yourself there, developer!
          </WorkDescription>
          <ShowMoreBar>
            <TextShow to="/gitfinder">Show more</TextShow>
            <LinkArrow />
          </ShowMoreBar>
        </TextBox>
      </Box1>
      <LeftSide>
        <TopBar>
          <Box2 data-aos="fade-up" data-aos-delay="400">
            <Box2Content>
              <Box1Image src={tipCalc} />
              <TextBox>
                <Date>March, 2021</Date>
                <WorkTitle>Tip Calculator</WorkTitle>
                <WorkDescription>
                  Application for calculating the amount of tips per person.
                </WorkDescription>
                <ShowMoreBar>
                  <TextShow to="/tipcalc">Show more</TextShow>
                  <LinkArrow />
                </ShowMoreBar>
              </TextBox>
            </Box2Content>
          </Box2>

          <Box3>
            <Box3Content data-aos="fade-up" data-aos-delay="300">
              <Box1Image src={weather} />
              <TextBox>
                <Date>February, 2021</Date>
                <WorkTitle>Weather App</WorkTitle>
                <WorkDescription>
                  My first ever React web app. It is bad, but FIRST!
                </WorkDescription>
                <ShowMoreBar>
                  <TextShow to="/weather_app">Show more</TextShow>
                  <LinkArrow />
                </ShowMoreBar>
              </TextBox>
            </Box3Content>
          </Box3>
        </TopBar>

        <BottomBar>
          <Box4>
            <Box4Content data-aos="fade-up" data-aos-delay="400">
              <Box1Image src={portfolio} />
              <TextBox>
                <Date>July, 2021</Date>
                <WorkTitle>Portfolio</WorkTitle>
                <WorkDescription>First portfolio idea.</WorkDescription>
                <ShowMoreBar>
                  <TextShow to="/portfolio">Show more</TextShow>
                  <LinkArrow />
                </ShowMoreBar>
              </TextBox>
            </Box4Content>
          </Box4>

          <Box5>
            <Box5Content data-aos="fade-up" data-aos-delay="200">
              <Box5Box href="https://github.com/maykeloo">
                <WorkTitle style={{ color: "blue" , fontSize: "2em"}}>
                  Show more on GitHub
                  <LinkArrow />
                </WorkTitle>
              </Box5Box>
            </Box5Content>
          </Box5>
          
        </BottomBar>
      </LeftSide>
    </>
  );
};

export default Main;
