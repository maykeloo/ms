import React, {useEffect} from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";
import gitfinderbg from '../../video/gitfinder.mp4'
import Typewriter from "typewriter-effect";
import { GitfinderWrapper, TextShow, WorkBackground, WorkDescription, WorkDescriptionBox, WorkTitleRouter, ShowMoreBar, LinkArrow, ShowOnGit } from './worksElements'

const Gitfinder = () => {

    useEffect(() => {
        Aos.init({duration: 2000});
      }, [])

    return (
        <>
            <GitfinderWrapper data-aos="fade-up" data-aos-delay="200">
                <WorkBackground src = {gitfinderbg} muted autoPlay = 'true' loop = 'true'/>
                <WorkDescriptionBox>
                    <WorkTitleRouter>
                    <Typewriter
                            options={{
                            strings: [`Gitfinder`],
                            autoStart: true,
                            loop: true,
                            delay: 200,
                            }}
                        />
                    </WorkTitleRouter>
                    <WorkDescription>
                    Tool for finding and showing information about GitHub users. It is
                    based on the API. It allows you to use two brightness modes.
                    Application shows the most important information about the searched
                    GitHub user. Find yourself there, developer!
                    </WorkDescription>
                    <ShowOnGit href='https://maykeloo.github.io/gitapi/'>Show on site</ShowOnGit>
                    <LinkArrow/>
                    <ShowMoreBar>
                    <TextShow to="/">Back</TextShow>
                    </ShowMoreBar>
                </WorkDescriptionBox>
            </GitfinderWrapper>       
        </>
    )   
}

export default Gitfinder
