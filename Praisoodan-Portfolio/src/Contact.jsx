import React from 'react'
import './Contact.css'
import Container from 'react-bootstrap/esm/Container'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlinePhonelinkRing } from "react-icons/md";

const Contact = () => {
  const linkedinURL = "https://www.linkedin.com/in/praisoodan-k-1b73b5238"
  const GitURL = "https://github.com/praisoodanVK"

  
  return (
    <Container>
      <div className='Contact-Page'>
      <h3>Let's Connect!!</h3> <br/>

      <div className='container-values'>     <p> <span> As a recent Mechanical Engineering graduate with a strong passion for front-end development, I am eager to start my career in web development. My experience with projects like a real-time chatting application and a weather app has equipped me with skills in React and Bootstrap. <br/>
      <br/>

I am excited about the opportunity to contribute my fresh perspective and enthusiasm to a dynamic team. If you’re looking for a motivated individual ready to learn and grow, I would love to connect and explore potential opportunities together!.</span></p> <br/>
        <br/>

 <div className="Contact-con">
  <span className='Content'> <a  target="_blank" rel="noopener noreferrer" className='Email'><HiOutlineMail /> </a>Email:</span> <span className='Content-URL'>praisoodanvk@gmail.com</span><br/>

 <span className='Content'> <a target="_blank" rel="noopener noreferrer" href={linkedinURL} className='Linkedin'><FaLinkedin />  </a>LinkedIn:</span>  <span className='Content-URL'>https://www.linkedin.com/in/pr
 aisoodanvk-frontend-reactdeveloper/</span><br/>

 <span className='Content'> <a target="_blank" rel="noopener noreferrer" href={GitURL} className='Github'><FaGithub /></a>GitHub:</span> <span className='Content-URL'>https://github.com/praisoodanVK</span><br/>

 <span className='Content'> <a  target="_blank" rel="noopener noreferrer" className='Phone'><MdOutlinePhonelinkRing /> </a>Phone:</span> <span className='Content-URL'>(+91)6374697118</span><br/>
  </div>
 
  <div className='End-text'>Based in <span className='content-color'>Nagapattinam,Tamilnadu,India📍</span> and open to <span className='content-color'>relocating </span>for the right opportunity.</div>


  </div></div>
  

   
    </Container>
  )
}

export default Contact
