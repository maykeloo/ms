import styled from "styled-components";

const gradientColor1 = "#AE67FA";
const gradientColor2 = "#F49867";

export const QuoteSection = styled.section`
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const QuoteBox = styled.div`
  width: 90%;
  height: 40%;
  position: relative;
  text-align: justify;
  display: flex;
  align-items: center;
  position: relative;

  &:after {
        position: absolute;
    content: "";
    background-image: radial-gradient(
      circle,
      rgba(89, 131, 252, 1) 0%,
      rgba(41, 53, 86, 1) 100%
    );
    width: 500px;
    height: 500px;
    left: -200px;
    top: -130px;
    filter: blur(30px);
    border-radius: 50%;
    opacity: 20%;
    }
`;

export const QuoteText = styled.blockquote`
  font-weight: 900;
  background: -webkit-linear-gradient(
    -45deg,
    ${gradientColor1},
    ${gradientColor2}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
