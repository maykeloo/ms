import React from "react";
import gitfinder from "../../images/gitfinder.png";
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
} from "./worksElements";
import tipCalc from "../../images/tipCalc.png";
import weather from '../../images/weatherapp.png'
const Main = () => {
  return (
    <>
      <Box1>
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

          <Box2>
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
            <Box3Content>
            <Box1Image src={weather} />
              <TextBox>
                <Date>February, 2021</Date>
                <WorkTitle>Weather App</WorkTitle>
                <WorkDescription>
                    My first ever web app. It is bad, but FIRST!
                </WorkDescription>
                <ShowMoreBar>
                  <TextShow to="/tipcalc">Show more</TextShow>
                  <LinkArrow />
                </ShowMoreBar>
              </TextBox>
            </Box3Content>
          </Box3>
        </TopBar>
      </LeftSide>
    </>
  );
};

export default Main;
