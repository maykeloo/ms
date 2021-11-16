import React, { useEffect } from "react";
import {
  AboutSection,
  Box1,
  Box2,
  Title,
  ContentGrid,
  TitleBar,
  Box2Contentbox,
  Box2ContentText,
  Box3,
  Box3Contentbox,
  Box3ContentText,
  Image,
  Circles,
  Box4,
  Box4Contentbox,
  TopBar,
  BottomBar,
  IconsBar,
  IconBox,
  JsIcon,
  ReactIcon,
  ReduxIcon,
  GitIcon,
  JsonIcon,
  SassLogo,
  HtmlIcon,
  SCIcon,
  NodeIcon,
  ExtraTechBar,
  ExtraText,
  ExtraTechnology,
  GetStartBar,
  GetBox,
  TextBar,
  Text1,
  Text2,
  ButtonBar,
  Button,
} from "./aboutElements";
import Aos from "aos";
import "aos/dist/aos.css";
import avatar from "../../images/avatar.png";
import circles from "../../images/circles.svg";
import { CarouselWrapper } from "react-pretty-carousel";
import GlitchClip from 'react-glitch-effect/core/GlitchClip';

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <AboutSection name="about">
        <ContentGrid>
          <TopBar>
            <Box1 data-aos="fade-right" data-aos-delay="200">
              <Image src={avatar} />
              <Circles src={circles} />
            </Box1>

            <Box2>
              <TitleBar data-aos="fade-left">
                <Title>About</Title>
              </TitleBar>
              <Box2Contentbox>
                <Box2ContentText data-aos="fade-right" data-aos-delay="400">
                  Hi, I am Michał Sukiennik, a Front-end Developer from Lesser
                  Poland province. <br /> I design <em>things</em>.
                </Box2ContentText>
              </Box2Contentbox>
            </Box2>
          </TopBar>

          <BottomBar>
            <Box3>
              <Box3Contentbox>
                <Box3ContentText data-aos="fade-up" data-aos-delay="200">
                  I am a multidisciplinary designer. My experience includes
                  UI/UX design, product design, marketing design and front-end
                  development.
                  <br />
                  <br />
                  As a designer, I put user needs first. I have a passion for
                  organized workflows, visual language design, and solving
                  complex problems.
                  <br />
                  <br />I am more hands-on by profession as I have a
                  mechatronics qualification, but software development has
                  consumed me enough to stay in front of my desk for extended
                  periods of time.
                </Box3ContentText>
              </Box3Contentbox>
            </Box3>

            <Box4>
              <Box4Contentbox data-aos="fade-left" data-aos-delay="200">
                <TitleBar>
                  <Title>Technologies</Title>
                </TitleBar>
                <IconsBar>
                  <CarouselWrapper
                    items={3}
                    mode="gallery"
                    showControls={false}
                  >
                    <GlitchClip>
                    <IconBox>
                    JavaScript
                      <JsIcon />
                    </IconBox>
                    </GlitchClip>
                    <GlitchClip>
                    <IconBox>
                      React
                      <ReactIcon />
                    </IconBox>
                    </GlitchClip>
                    <GlitchClip>
                    <IconBox>
                      Redux
                      <ReduxIcon />
                    </IconBox>
                    </GlitchClip>
                    <GlitchClip>
                    <IconBox>
                      GIT
                      <GitIcon />
                    </IconBox>
                    </GlitchClip>
                    <GlitchClip>
                    <IconBox>
                      JSON
                      <JsonIcon />
                    </IconBox>
                    </GlitchClip>
                    <GlitchClip>
                    <IconBox>
                      SASS
                      <SassLogo />
                    </IconBox>
                    </GlitchClip>
                    <GlitchClip>
                    <IconBox>
                      HTML
                      <HtmlIcon />
                    </IconBox>
                    </GlitchClip>
                    <GlitchClip>
                    <IconBox>
                      Styled Components
                      <SCIcon />
                    </IconBox>
                    </GlitchClip>
                    <GlitchClip>
                    <IconBox>
                      Node.js
                      <NodeIcon />
                    </IconBox>
                    </GlitchClip>
                    <GlitchClip>
                    <IconBox>
                      <ExtraTechBar>
                        <ExtraText>And more...</ExtraText>
                        <ExtraTechnology>CSS3 /</ExtraTechnology>
                        <ExtraTechnology>RestAPI /</ExtraTechnology>
                        <ExtraTechnology>Adobe Programs /</ExtraTechnology>
                        <ExtraTechnology>Basics of UX</ExtraTechnology>
                      </ExtraTechBar>
                    </IconBox>
                    </GlitchClip>
                  </CarouselWrapper>
                </IconsBar>
              </Box4Contentbox>
            </Box4>
          </BottomBar>
        </ContentGrid>
      </AboutSection>
      <GetStartBar data-aos="zoom-in">
          <GetBox>
            <TextBar>
                <Text1>
                  Let me help you
                </Text1>
                <Text2>
                  Text to me today and let start your business journey.
                </Text2>
            </TextBar>
            <ButtonBar>
              <Button>
                Get Started
              </Button>
            </ButtonBar>
          </GetBox>
      </GetStartBar>
    </>
  );
};

export default About;
