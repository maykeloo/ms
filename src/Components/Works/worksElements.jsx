import styled from "styled-components";

const gradientColor1 = "#AE67FA";
const gradientColor2 = "#F49867";

export const WorksSection = styled.section`
    width:100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-end;
`

export const WorksContentBox = styled.div`
    width: 80%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const TitleBar = styled.div`
    width: 100%;
    height: 10%;
`

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
`

export const GridBar = styled.div`
    height: 80%;
    display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(2, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
`

export const Box1 = styled.div`
    grid-area: 1 / 1 / 3 / 2;
    height: 100%;
    width: 95%;
    background-color: #0c335e;
    display: flex;
    justify-content: center;    
    align-items: center;
    flex-direction: column;
`

export const Box1Image = styled.img`
    object-fit: cover;
    height: 30%;
    width: 100%;
`

export const Box2 = styled.div`
    grid-area: 1 / 2 / 2 / 3;
    height: 100%;
    width: 100%;
    background-color: blue;
`

export const TextBox = styled.div`
    width: 90%;
    height: 90%;
`

export const Date = styled.p`
    color: white;
`

export const WorkTitle = styled.p`
    color: white;
    font-size: 28px;
    font-weight: bold;
`

export const WorkDescription = styled.p`
    color: white;
    font-size: 16px;
`
