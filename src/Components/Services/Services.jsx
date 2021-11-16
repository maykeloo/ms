import React, { useEffect } from "react";
import ServicesContent from "./ServicesContent";
import fbLogo from "../../images/fb_logo.svg";
import liLogo from "../../images/li_logo.svg";
import bhLogo from "../../images/bh_logo.svg";
import {
  ServicesSection,
  SocialMediaBar,
  SocialMediaIcon,
  SocialMediaIconBar,
  SocialMediaLink,
} from "./servicesElements";
import Aos from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <ServicesSection>
        <SocialMediaBar>
          <SocialMediaLink
            href="https://www.facebook.com/Michalsukiennikk"
            target="_blank"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <SocialMediaIconBar>
              <SocialMediaIcon src={fbLogo} />
            </SocialMediaIconBar>
          </SocialMediaLink>
          <SocialMediaLink
            href="https://www.linkedin.com/in/micha%C5%82-sukiennik-108a2b225/"
            target="_blank"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <SocialMediaIconBar>
              <SocialMediaIcon src={liLogo} />
            </SocialMediaIconBar>
          </SocialMediaLink>
          <SocialMediaLink
            href="https://www.behance.net/michasukiennik1"
            target="_blank"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <SocialMediaIconBar>
              <SocialMediaIcon src={bhLogo} />
            </SocialMediaIconBar>
          </SocialMediaLink>
        </SocialMediaBar>

        {/* Next component */}
        <ServicesContent/>
      </ServicesSection>
    </>
  );
};

export default Services;
