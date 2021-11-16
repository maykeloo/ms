import React from "react";
import {
  Box1,
  Box1Image,
  Box2,
  Date,
  GridBar,
  TextBox,
  Title,
  TitleBar,
  WorkDescription,
  WorksContentBox,
  WorksSection,
  WorkTitle,
} from "./worksElements";

import gitfinder from "../../images/gitfinder.png";

const Works = () => {
  return (
    <>
      <WorksSection>
        <WorksContentBox>
          <TitleBar>
            <Title>Works</Title>
          </TitleBar>

          <GridBar>
            <Box1>
              <Box1Image src={gitfinder} />
              <TextBox>
              <Date>June, 2021</Date>
              <WorkTitle>Gitfinder</WorkTitle>
              <WorkDescription>
                The first application using API that caused me a lot of problems
                but also satisfaction when it finally started to work SENSIBLY.
                It is not a masterpiece, but with time, when I get into
                practice, I will improve it. It uses the OpenwWeatherMap API and
                is a fully functional application that retrieves weather data
                from a given place entered by the user.
              </WorkDescription>
              </TextBox>
            </Box1>
            <Box2></Box2>
          </GridBar>
        </WorksContentBox>
      </WorksSection>
    </>
  );
};

export default Works;
