import React, { useRef } from 'react'
import Container from 'react-bootstrap/esm/Container'
import './About.css'
import Lottie from "lottie-react";
import animationData from "./assets/Animation.json";


const About = () => {
  const AboutAnimation = useRef();
  return (
    <>
    <Container fluid>
        <div className='About-page'>
          <h3 className='About-header'  data-aos="fade-up-left" data-aos-duration="1000"> About Me </h3>
          <p data-aos="fade-right"  data-aos-duration="1000">
          <div className='Animation'>
          <Lottie lottieRef={AboutAnimation} animationData={animationData}/>
          </div>
           I’m a motivated <span>front-end developer</span> specializing in <span>React</span>, eager to kickstart my career in <span>web development</span> . Having completed my <span>BE in Mechanical Engineering</span> , I’ve developed a solid foundation in <span>React, HTML, CSS, JavaScript,</span> and<span> Bootstrap</span>  and I enjoy creating <span>dynamic</span> and <span>responsive web applications</span> that deliver exceptional user experiences. My experience includes building projects with Bootstrap, which has taught me the importance of <span>responsive </span>design and user-centric development. I also have a basic understanding of <span>C</span>, giving me insight into <span>programming fundamentals.</span> I’m actively <span>seeking entry-level</span>  front-end development opportunities where I can contribute my <span>skills </span>and enthusiasm to a team, with a commitment to <span>continuous learning</span> and <span>growth</span>.
        </p>
        </div>
        </Container>
    </>
  )
}

export default About
