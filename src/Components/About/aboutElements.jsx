import styled from "styled-components";
import { Link } from "react-scroll";


import {SiJavascript, SiRedux, SiJson, SiStyledcomponents} from 'react-icons/si'
import {FaReact, FaNode} from 'react-icons/fa'
import {DiGit, DiSass} from 'react-icons/di'
import {AiFillHtml5} from 'react-icons/ai'


export const AboutSection = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ContentGrid = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  gap: 10px 10px;
  justify-content: center;
  flex-direction: column;
`;

export const TopBar = styled.div`
  width: 100%;
  display: flex;

  @media screen and (max-width: 1200px)
  {
    flex-direction: column;
  }
`

export const BottomBar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

`

export const Box1 = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1200px)
  {
    width: 100%;
  }

`;

export const Circles = styled.img`
    position: absolute;
    height: 250px;
    left: 0px;
    bottom: -100px;
    
`

export const Image = styled.img` 
  width: 400px;
  border-radius: 150px;
`

export const Box2 = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1200px)
  {
    width: 100%;
  }

`;
export const TitleBar = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: flex-end;
  display: flex;
  align-items: flex-start;
  margin-bottom: 40px;
`;

export const Title = styled.span`
  color: #1D3557;
  font-size: 20px;
`;

export const Box2Contentbox = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
`;
export const Box2ContentText = styled.h3`
  font-size: 3.2em;
  padding: 0;
  margin: 0;
  font-weight: 900;
  color: #E63946;

  @media screen and (max-width: 1200px)
  {
    font-size: 2em;
  }
`;

export const Box3 = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  transition: 0.2s;
`

export const Box3Contentbox = styled.div`
  width: 100%;
  height: 120%;
  display: flex;
  align-items: flex-end;

  @media screen and (max-width: 1200px)
  {
    width: 100%;
  }
`

export const Box3ContentText = styled.p`
  color: #f1faee;
  font-size: 45px;
  line-height: 50px;

  @media screen and (max-width: 1300px)
  {
    font-size: 18px;
    line-height: 32px;
  }
`

export const Box4 = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;

  @media screen and (max-width: 1200px)
  {
    width: 100%;
  }
`

export const Box4Contentbox = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const IconsBar = styled.div`
  width: 40%;
  height: 90%;
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;

  @media screen and (max-width: 1200px)
  {
    width: 100%;
  }
`

export const IconBox = styled.div`
  background: transparent;
  width: 100%;
  height: 25vh;
  display: flex;
  align-items: center;
  border-radius: 4px;
  justify-content: space-around;
  flex-direction: column;
  color: #F1FAEE;
  font-size: 16px;
  font-weight: 900;
  transition: 0.2s;

  @media screen and (max-width: 1200px)
  {
    width: 100%;
  }



    > * {
      transition-duration: 0.2s;
      color: black;
      transform: scale(1.2);
    }
`

export const JsIcon = styled(SiJavascript)`
  color: white;
  font-size: 5em;
  transition: 0.2s;
`

export const ReactIcon = styled(FaReact)`
  color: white;
  font-size: 5em;
  transition: 0.2s;
`
export const ReduxIcon = styled(SiRedux)`
  color: white;
  font-size: 5em;
  transition: 0.2s;
`

export const GitIcon = styled(DiGit)`
  color: white;
  font-size: 5em;
  transition: 0.2s;
`

export const JsonIcon = styled(SiJson)`
  color: white;
  font-size: 5em;
  transition: 0.2s;
`

export const SassLogo = styled(DiSass)`
  color: white;
  font-size: 5em;
  transition: 0.2s;
`

export const HtmlIcon = styled(AiFillHtml5)`
  color: white;
  font-size: 5em;
  transition: 0.2s;
`

export const SCIcon = styled(SiStyledcomponents)`
  color: white;
  font-size: 5em;
  transition: 0.2s;
`

export const NodeIcon = styled(FaNode)`
  color: white;
  font-size: 5em;
  transition: 0.2s;
`

export const ExtraTechBar = styled.div`
  width: 70%;
  height: 90%;
`

export const ExtraText = styled.span`
  color: white;
  font-size: 20px;
`

export const ExtraTechnology = styled.p`
  font-size: 14px;
  color: #457B9D;
  font-weight: 900;
`

export const GetStartBar = styled.div`
  width: 100%;
  margin-top: 200px;
  height: 300px;
  display: flex;
  justify-content: center;  
  align-items: center;
`

export const GetBox = styled.div`
  width: 80%;
  height: 60%;
  border-radius: 7px;
  background: #e63946;
  display: flex;
  align-items: center;
`

export const TextBar = styled.div`
  width: 60%;
  height: 30%;
  margin-left: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 1200px)
  {
    width: 50%;
    margin-left: 15px;
    height: 60%;
  }
`
export const Text1 = styled.span`
  font-size: 13px;
  @media screen and (max-width: 1200px)
  {
    font-size: 10px
  }
`

export const Text2 = styled.span`
  font-size: 22px;
  font-weight: 900;
  letter-spacing: 1px;

  @media screen and (max-width: 1200px)
  {
    font-size: 16px
  }
`

export const ButtonBar = styled.div`
  width: 30%;
  height: 30%;
  margin-right: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 1200px)
  {
    width: 50%;
  }
`

export const Button = styled(Link)`
  padding: 20px 40px;
  border-radius: 40px;
  background-color: black;
  color: white;
  border: 2px solid transparent;
  transition: 0.2s;
  cursor: pointer;
  font-size: 22px;
  font-weight: bold;

  @media screen and (max-width: 1200px)
  {
    font-size: 13px;
    padding: 5px 10px;
  }

  &:hover {
    background-color: white;
    border: 2px solid black;
    color: black;
  }
`

export const ArrowBox = styled.div`
  width: 100px;
  height: 50px;
  margin-top: 20px;
`

export const Arrow = styled.img`
  width: 100%;
`