import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

const gradientColor1 = "#AE67FA";
const gradientColor2 = "#F49867";

export const WorksSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const WorksContentBox = styled.div`
  width: 80%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TitleBar = styled.div`
  width: 100%;
`;

export const Title = styled.h3`
  font-size: 5em;
  font-weight: 900;
  margin: 0;
  padding: 0;
  color: #2A9D8F;
`;

export const FlexBar = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin-top: 50px;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const Box1 = styled.div`
  width: 100%;
  background-color: #0c335e;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  transition: 0.4s;
  border-radius: 5px;

  @media screen and (max-width: 1200px) {
    width: 100%;
    margin-top: 30px;
  }
`;

export const LeftSide = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Box1Image = styled.img`
  object-fit: cover;
  height: 30%;
  width: 100%;

  border-radius: 5px 5px 0 0;
`;

export const TopBar = styled.div`
  height: 50%;
  width: 100%;
  display: flex;

  @media screen and (max-width: 1200px)
  {
    height: 100%;
    flex-direction: column;
  }
`;

export const TextBox = styled.div`
  width: 75%;
  height: 60%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
`;

export const Date = styled.span`
  color: white;

  @media screen and (max-width: 1200px) {
    font-size: 10px;
  }
`;

export const WorkTitle = styled.span`
  color: white;
  font-size: 34px;
  font-weight: bold;

  @media screen and (max-width: 1200px) {
    font-size: 24px;
  }
`;

export const WorkDescription = styled.p`
  color: white;
  font-size: 0.8vw;
  line-height: 30px;

  @media screen and (max-width: 1200px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

export const ShowMoreBar = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.2s;
`;

export const TextShow = styled(Link)`
  color: #3c3cff;
  font-weight: bold;
`;

export const LinkArrow = styled(FiArrowUpRight)`
  color: #3c3cff;
`;


export const Box2 = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  transition: 0.4s;
  border-radius: 5px;

  @media screen and (max-width: 1200px) {
    width: 100%;
    margin-top: 30px;
  }
`;

export const Box2Content = styled.div`
  height: 98%;
  width: 98%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #2A9D8F;
  border-radius: 5px;

  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;

export const Box3 = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  transition: 0.4s;
  border-radius: 5px;


  @media screen and (max-width: 1200px) {
    width: 100%;
    margin-top: 30px;
  }
`;

export const Box3Content = styled.div`
  height: 98%;
  width: 98%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #F4A261;
  border-radius: 5px;

  @media screen and (max-width: 1200px) {
    width: 100%;
  }
  
`;

export const BottomBar = styled.div`
  height: 50%;
  width: 100%;
  display: flex;

  @media screen and (max-width: 1200px)
  {
    height: 100%;
    flex-direction: column;
  }
`;

export const Box4 = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  transition: 0.4s;


  @media screen and (max-width: 1200px) {
    width: 100%;
    margin-top: 30px;
  }
`;

export const Box4Content = styled.div`
  height: 98%;
  width: 98%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #E9C46A;
  border-radius: 5px;

  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;

export const Box5 = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  transition: 0.4s;



  @media screen and (max-width: 1200px) {
    width: 100%;
    margin-top: 30px;
  }

`;

export const Box5Content = styled.div`
  height: 98%;
  width: 98%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 5px;

  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;

export const Box5Box = styled.a`
  width: 80%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`;

export const GitfinderWrapper = styled.div`
  width: 100%;
  height: 70vh;
  position: relative;

`;

export const WorkBackground = styled.video`
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  border-radius: 5px;
  z-index: 0;
`

export const WorkDescriptionBox = styled.div`
  width: 30vw;
  bottom: 50%;
  transform: translateY(25vh);
  height: 55vh;
  left: 5vw;
  position: absolute;
  z-index: 1;
  background-color: white;
  padding: 30px;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, .2); 
  border-radius: 5px;
  background-color: rgba(255, 255, 255, .15);
  
  backdrop-filter: blur(5px);


  @media screen and (max-width: 1200px)
  {
    width: 80%;
  }
`

export const WorkTitleRouter = styled.h3`
  color: #E9C46A;
  font-size: 4em;

  @media screen and (max-width: 1200px)
  {
    font-size: 2em;
  }
`

export const ShowOnGit = styled.a`
  color: blue;
  text-decoration: none;
`