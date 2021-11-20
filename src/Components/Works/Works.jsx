import React from "react";
import {
  FlexBar,
  Title,
  TitleBar,
  WorksContentBox,
  WorksSection,
} from "./worksElements";
import { Routes, Route } from "react-router-dom";
import Main from "./Main";
import Gitfinder from "./Gitfinder";
import TipCalc from "./TipCalc";

const Works = () => {
  return (
    <>
      <WorksSection name="works">
        <WorksContentBox>
          <TitleBar>
            <Title>Works</Title>
          </TitleBar>

          <FlexBar>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/gitfinder" element={<Gitfinder/>}/>
              <Route path="/tipcalc" element={<TipCalc/>}/>
            </Routes>
          </FlexBar>
        </WorksContentBox>
      </WorksSection>
    </>
  );
};

export default Works;
