import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

const gradientColor1 = "#AE67FA";
const gradientColor2 = "#F49867";

export const WorksSection = styled.section`
  width: 100%;
  height: 100vh;
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
  background: -webkit-linear-gradient(
    -45deg,
    ${gradientColor1},
    ${gradientColor2}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const FlexBar = styled.div`
  display: flex; 
  width:100%;
  height: 100%;


  @media screen and (max-width: 1200px)
  {
    flex-direction: column;
  }
`;

export const Box1 = styled.div`
  width: 35%;
  background-color: #0c335e;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 1200px)
  {
    width: 100%
  }
`;

export const LeftSide = styled.div`
  flex-grow: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  
`

export const Box1Image = styled.img`
  object-fit: cover;
  height: 30%;
  width: 100%;
`;

export const TopBar = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
`



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

  @media screen and (max-width: 1200px)
  {
    font-size: 10px;
  }
`;

export const WorkTitle = styled.span`
  color: white;
  font-size: 34px;
  font-weight: bold;

  @media screen and (max-width: 1200px)
  {
    font-size: 24px;
  }
`;

export const WorkDescription = styled.p`
  color: white;
  font-size: 0.8vw;
  line-height: 30px;

  @media screen and (max-width: 1200px)
  {
    font-size: 16px;
  }
`;

export const ShowMoreBar = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
        transform: translateY(-10px);
     }
`;

export const TextShow = styled(Link)`
  color: #3c3cff;
  font-weight: bold;
`;

export const LinkArrow = styled(FiArrowUpRight)`
  color: #3c3cff;
`;

export const GitfinderWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: yellow;
`

export const Box2 = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
`;

export const Box2Content = styled.div`
  height: 98%;
  width: 98%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #2dc497;
`

export const Box3 = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
`;

export const Box3Content = styled.div`
  height: 98%;
  width: 98%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #506503;
`