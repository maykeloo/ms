import React, {useEffect} from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";
import Typewriter from "typewriter-effect";
import portfolio from '../../video/portfolio.mp4'
import { GitfinderWrapper, TextShow, WorkBackground, WorkDescription, WorkDescriptionBox, WorkTitleRouter, ShowMoreBar, LinkArrow, ShowOnGit } from './worksElements'

const Portfiolio = () => {

    useEffect(() => {
        Aos.init({duration: 2000});
      }, [])

    return (
        <>
            <GitfinderWrapper data-aos="fade-up" data-aos-delay="200">
                <WorkBackground src = {portfolio} muted autoPlay = 'true' loop = 'true'/>
                <WorkDescriptionBox>
                    <WorkTitleRouter style = {{color: 'black'}}>
                    <Typewriter
                            options={{
                            strings: [`Portfolio`],
                            autoStart: true,
                            loop: true,
                            delay: 200,
                            }}
                        />
                    </WorkTitleRouter>
                    <WorkDescription style = {{color: 'black'}}>
                    I used similar phrases as on this page. It was my first underdeveloped page. Not that this one was polished.
                    </WorkDescription>
                    <ShowOnGit href='https://maykeloo.github.io/home/#/'>Show on site</ShowOnGit>
                    <LinkArrow/>
                    <ShowMoreBar>
                    <TextShow to="/">Back</TextShow>
                    </ShowMoreBar>
                </WorkDescriptionBox>
            </GitfinderWrapper>       
        </>
    )   
}

export default Portfiolio
