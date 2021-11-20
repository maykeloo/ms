import React, {useEffect} from "react";
import { QuoteBox, QuoteSection, QuoteText } from "./quoteElements";
import Aos from 'aos';
import "aos/dist/aos.css";

const Quote = () => {

    useEffect(() => {
        Aos.init({duration: 2000});
      }, [])

  return (
    <>
      <QuoteSection>
        <QuoteBox data-aos="fade-up" data-aos-delay="200">
          <QuoteText>
            "The most important thought I had was that I must have something
            else. I didn't want to be content with the general template. I
            wanted users to take a trip to see what it is like now and what the
            user experience will be from today."
          </QuoteText>
        </QuoteBox>
      </QuoteSection>
    </>
  );
};

export default Quote;
