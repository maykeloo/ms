import styled, { keyframes } from "styled-components";
import { Link } from "react-scroll";

const scale = keyframes`
    0%{
        transform: scale(1);
    }

    50%{
        transform: scale(1.4);
    }

    100%{
        transform: scale(1);
    }
`

const gradientColor1 = "#AE67FA";
const gradientColor2 = "#F49867";

export const ServicesSection = styled.section`
    height: 130vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 1200px)
    {
        height: 100%;
    }
`

export const SocialMediaBar = styled.div`
    width: 30%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    z-index: 10;

    @media screen and (max-width: 1100px)
    {
        width: 80%;
    }
`

export const SocialMediaIconBar = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 1100px)
    {
        width: 80%;
    }
`
export const SocialMediaIcon = styled.img`
    width: 100%;
    transition: 0.3s;
    filter: grayscale(100%);
    opacity: 0.3;
    min-width: 100%;

    &:hover {
        filter: grayscale(0%);
    opacity: 1;
    }
`

export const SocialMediaLink = styled.a`
`

export const ServicesBox = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 100px;
    display: flex;
    justify-content: center;
    align-items: flex-end;

    @media screen and (max-width: 1200px)
    {
        display: none;
    }
`

export const ServicesBoxMobile = styled.div`

display: none;

    @media screen and (max-width: 1200px)
    {
        width: 100%;
    height: 100%;
    margin-top: 100px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    }
`

export const ServicesContentBox = styled.div`
    width: 80%;
    height: 90%;
    padding: 0px 50px;
    background-color: #0c335e;
    border-radius: 4px;
    box-shadow: 0px 0px 24px 0px rgba(45, 45, 45, 1);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: relative;

    &:after {
    position: absolute;
    content: "";
    background-image: radial-gradient(
      circle,
      rgba(89, 131, 252, 1) 0%,
      rgba(41, 53, 86, 1) 100%
    );
    width: 400px;
    height: 400px;
    left: 200px;
    top: 200px;
    filter: blur(30px);
    border-radius: 50%;
    opacity: 20%;
    }

    &:before {
        position: absolute;
    content: "";
    background-image: radial-gradient(
      circle,
      rgba(89, 131, 252, 1) 0%,
      rgba(41, 53, 86, 1) 100%
    );
    width: 400px;
    height: 400px;
    bottom: -200px;
    right: -200px;
    filter: blur(100px);
    border-radius: 50%;
    opacity: 20%;
    }

    @media screen and (max-width: 1200px)
    {
        display: none;
    }

`

export const ServicesContentBoxMobile = styled.div`

    display: none;

    @media screen and (max-width: 1200px)
    {
        width: 80%;
    height: 90%;
    padding: 0px 50px;
    background-color: #0c335e;
    border-radius: 4px;
    box-shadow: 0px 0px 24px 0px rgba(45, 45, 45, 1);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: relative;

    &:after {
        position: absolute;
    content: "";
    background-image: radial-gradient(
      circle,
      rgba(89, 131, 252, 1) 0%,
      rgba(41, 53, 86, 1) 100%
    );
    width: 400px;
    height: 400px;
    left: 200px;
    top: 200px;
    filter: blur(30px);
    border-radius: 50%;
    opacity: 20%;
    }

    &:before {
        position: absolute;
    content: "";
    background-image: radial-gradient(
      circle,
      rgba(89, 131, 252, 1) 0%,
      rgba(41, 53, 86, 1) 100%
    );
    width: 400px;
    height: 400px;
    bottom: -200px;
    right: -200px;
    filter: blur(100px);
    border-radius: 50%;
    opacity: 20%;
    }

    }
`


export const TopBar = styled.div`
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 1200px)
  {
      height: 100%;
  }

`

export const TitleBar = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    margin-top: 30px;
    justify-content: space-between;
`
export const TitleBox = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    align-items: center;
`

export const SectionTitle = styled.p`
    color: white;
    font-size: 20px;
    font-weight: bold;
`

export const YearBox = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

export const SectionYear = styled.p`
    color: #076ff7a2;
    font-size: 40px;
    margin: 0;
    font-weight: bold;
    position: relative;
    text-decoration: line-through;
`

export const TopBarContentBox = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    @media screen and (max-width: 1200px)
  {
      height: 100%;
      flex-direction: column;
  }
`

export const TextBox = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    align-items: flex-end;  

    @media screen and (max-width: 1200px)
  {
      width: 100%;
  }
`

export const Text = styled.div`
font-size: 5vh;
  font-weight: 900;
  background: -webkit-linear-gradient(
    -45deg,
    ${gradientColor1},
    ${gradientColor2}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (max-width: 1200px)
  {
      font-size: 4vh;
  }
`

export const LinkBox = styled.div`
    width: 20%;
    height: 50px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    transition: .2s;

    &:hover {
       color: white;
    }

    @media screen and (max-width: 1200px)
  {
      width: 100%;
      align-items: flex-end;
      justify-content: flex-start;
  }
`

export const LinkTo = styled(Link)`
    color: ${gradientColor2};
    cursor: pointer;
`

export const BottomBar = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items:  flex-end;
    transition: 0.3s;

    @media screen and (max-width: 1200px)
    {
        flex-direction: column;
        margin-top: 100px;
    }
`

export const ThreeBox = styled.div`
    height: 80%;
    width: 30%;
    user-select: none;  
    @media screen and (max-width: 1200px)
    {
        margin-top: 100px;
        width: 100%;
    }
`

export const BoxTitleBar = styled.div`
    height: 20%;
    width: 100%;
    display: flex;
    position: relative;

    &:after {
        position: absolute;
        content: '';
        width: 50px;
        height: 5px;
        background-image: linear-gradient(${gradientColor1}, ${gradientColor2});
        top: 0;
        left: 0;
    }
`

export const BoxTitle = styled.h3`
  color: white;
  font-size: 25px;
`

export const BoxTextBar = styled.div`
    height: 80%;
    width: 100%;
`

export const BoxText = styled.p`
    color: #75b1ff;
    font-size: 1em;
    letter-spacing: 1px;
    line-height: 25px;
`

