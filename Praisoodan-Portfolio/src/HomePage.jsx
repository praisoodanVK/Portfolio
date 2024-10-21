import React from 'react'
import ProfileImage from './assets/Profile.jpg';
import './Homepage.css'
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { TfiInstagram } from "react-icons/tfi";
import { FaFileDownload } from "react-icons/fa";
import Html  from './assets/html.png';
import CSS from './assets/social.png';
import JS from './assets/js.png';
import Rct from './assets/React.png';
import BtStrp from './assets/bootstrap.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const HomePage = () => {
  const linkedinURL = "https://www.linkedin.com/in/praisoodanvk-frontend-reactdeveloper/"
  const GitURL = "https://github.com/praisoodanVK"
  const InstaURL = "https://www.instagram.com/impiraipkv_/" 
  return (
    <>
         <Container fluid>
    <div className='Home-Container'>
    <div data-aos="fade-down" data-aos-duration="1000" className='Home-image'>
      <img src={ProfileImage}/>
    </div>
    <div className='HomePage-1'>
    <h1> Front-End React Developer</h1>
    <p> 👋 Hi, I’m PraisoodanKodeewsaran, a passionate <span className='f-e'>Front-End</span><span className='react'> React</span> developer, based in Nagapptinam,Tamilnadu📍. As a recent graduate, I’m excited to create dynamic and user-friendly web applications. And am always eager to learn new technologies and improve my skills.</p>
     <p className='Resume'>Download Resume <a className='Download' href='Praisoodan-Resume.pdf' download='praisoodanK_Resume'><FaFileDownload /></a></p> 
    </div>
    <div className='Home-icons'> 
    <a href={linkedinURL}  target="_blank" rel="noopener noreferrer" className='Github'><FaLinkedin /> </a>
    <a href={GitURL}  target="_blank" rel="noopener noreferrer" className='Github'><FaGithub /></a>
    <a href={InstaURL}  target="_blank" rel="noopener noreferrer" className='Instagram'><TfiInstagram /> </a>
    
    </div> 
    <div className='Tech-Stack'  data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="1000">
      <p> Tech Stack | <i><img src={Rct}/></i>  <i><img src={JS}/></i>  <i><img src={Html}/></i>  <i><img src={CSS}/></i>  <i><img src={BtStrp}/></i> </p>
    </div>
    </div>
   </Container>
 
    </>
  )
}

export default HomePage
