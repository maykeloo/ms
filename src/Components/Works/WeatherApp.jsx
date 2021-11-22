import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Typewriter from "typewriter-effect";
import {
  GitfinderWrapper,
  TextShow,
  WorkBackground,
  WorkDescription,
  WorkDescriptionBox,
  WorkTitleRouter,
  ShowMoreBar,
  LinkArrow,
  ShowOnGit,
} from "./worksElements";
import weather from "../../video/weatherApp.mp4";

const WeatherApp = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <GitfinderWrapper data-aos="fade-up" data-aos-delay="200">
        <WorkBackground src={weather} muted autoPlay="true" loop="true" />
        <WorkDescriptionBox>
          <WorkTitleRouter>
            <Typewriter
              options={{
                strings: [`Weather App`],
                autoStart: true,
                loop: true,
                delay: 200,
              }}
            />
          </WorkTitleRouter>
          <WorkDescription>
            My first ever React web app. It is bad, but FIRST!
          </WorkDescription>
          <ShowOnGit href="https://maykeloo.github.io/weather-app/">
            Show on site
          </ShowOnGit>
          <LinkArrow />
          <ShowMoreBar>
            <TextShow to="/">Back</TextShow>
          </ShowMoreBar>
        </WorkDescriptionBox>
      </GitfinderWrapper>
    </>
  );
};

export default WeatherApp;
