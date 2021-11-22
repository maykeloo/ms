import React, {useEffect} from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";
import Typewriter from "typewriter-effect";
import { GitfinderWrapper, TextShow, WorkBackground, WorkDescription, WorkDescriptionBox, WorkTitleRouter, ShowMoreBar, LinkArrow, ShowOnGit } from './worksElements'
import tipCalc from '../../video/tipCalc.mp4'

const TipCalc = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
      }, [])
    return (
        <>
            <GitfinderWrapper data-aos="fade-up" data-aos-delay="200">
                <WorkBackground src = {tipCalc} muted autoPlay = 'true' loop = 'true'/>
                <WorkDescriptionBox>
                    <WorkTitleRouter>
                    <Typewriter
                            options={{
                            strings: [`Tip Calculator`],
                            autoStart: true,
                            loop: true,
                            delay: 200,
                            }}
                        />
                    </WorkTitleRouter>
                    <WorkDescription style = {{color: 'black'}}>
                    Application for calculating the amount of tips per person.
                    </WorkDescription>
                    <ShowOnGit href='https://maykeloo.github.io/tipCalculator/'>Show on site</ShowOnGit>
                    <LinkArrow/>
                    <ShowMoreBar>
                    <TextShow to="/">Back</TextShow>
                    </ShowMoreBar>
                </WorkDescriptionBox>
            </GitfinderWrapper>  
        </>
    )
}

export default TipCalc
