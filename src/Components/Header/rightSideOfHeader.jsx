import React, { useEffect } from "react";
import {
  Image,
  RightBox,
  ScrollIcon,
  ScrollIconBox,
  ScrollText,
} from "./headerElements";
import Aos from 'aos';
import "aos/dist/aos.css";


import image from "../../images/laptop.svg";

const RightSideOfHeader = () => {
  useEffect(() => {
    document.addEventListener("mousemove", parallax);
    function parallax(e) {
      document.querySelectorAll(".object").forEach(function (move) {
        let movingValue = move.getAttribute("data-value");
        let x = e.clientX * movingValue;
        let y = e.clientY * movingValue;

        move.style.transform =
          "translateX(" + x + "px) translateY(" + y + "px)";
      });
    }
  }, []);

  useEffect(() => {
    Aos.init({duration: 2000});
  }, [])

  return (
    <>
      <RightBox>
        <Image src={image} className="object" data-value="0.03"/>
          <ScrollIconBox data-aos="fade-down" data-aos-delay="300" to = 'about' smooth = {true} duration = '10000'>
            <ScrollText>Scroll down</ScrollText>
            <ScrollIcon />
          </ScrollIconBox>
      </RightBox>
    </>
  );
};

export default RightSideOfHeader;
