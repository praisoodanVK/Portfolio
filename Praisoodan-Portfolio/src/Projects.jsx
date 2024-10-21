import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import './Projects.css';
import Caimage1 from './assets/Chat_Stream/IMG-1.png';
import Caimage2 from './assets/Chat_Stream/IMG-2.png';
import Waimage1 from './assets/Weather-App/IMG-1.png';
import Waimage2 from './assets/Weather-App/IMG-2.png';
import Tdimage1 from './assets/To-Do/IMG-1.png';
import Tdimage2 from './assets/To-Do/IMG-2.png';
import { FaGithub } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const Projects = () => {
    const GitURL = "https://github.com/praisoodanVK"
    const Chatscream = "https://praisoodanvk-chat-stream-application.netlify.app/"
    const WeatherApp = "https://praisoodanvk-weatherwise-application.netlify.app/"
    const ToDoApp = "https://praisoodanvk-taskmate-application.netlify.app/"

  return (
    <>
    <Container fluid>
    {/* <hr className='hr'/>  */}
    <div className='Project-Section'>
    <h3> Projects </h3>
    <div className='project-1 ' >
    <div className='Pro-img-1'  data-aos="zoom-in-right"  data-aos-duration="1500">
   <img className='d-none d-md-block' src={Caimage1} />
   <img className='d-none d-md-block' src={Caimage2} />
   </div>

   <p data-aos="fade-left" data-aos-duration="1500" >
   <h3> Chat Stream <br/>(Real-Time Chat Application) </h3><br/>
     <span className='Prj-ov'>Tech Stack: </span> <span>React, Firebase, HTML, CSS, JavaScript, Bootstrap</span><br/>
  <span className='Prj-ov'>Project Overview:</span>  <br/>
This is a real-time chat application built with <span>React</span>  and <span>Firebase</span> , offering <span>smooth</span>  and <span>instant </span> communication with a user-friendly interface.<br/>
<span className='Prj-ov'>Key Features:</span> <br/>
<span className='Prj-ov'> Real-Time Messaging:</span><br/>
Uses Firebase to <span>send</span>  and <span>receive </span>  messages instantly without page reloads.<br/>
<span className='Prj-ov'>Google Authentication:</span> <br/>
Users can log in with their <span>Google accounts</span> , and their profile picture is automatically set based on their Google account.<br/>
<span className='Prj-ov'>Chatroom Creation and Deletion:</span> <br/>
Users can  <span>createnew chatrooms</span>  by providing a room name and an image link, and also <span>delete rooms</span>  as needed, all handled by Firebase.<br/>
<span className='Prj-ov'>Visual Message Differentiation:</span> <br/>
Messages from different users are<span>color-coded</span>  to make it easier to follow conversations.<br/>
<span className='Prj-ov'> Responsive Design:</span><br/>
Built with Bootstrap to ensure the app works well on mobile, tablet, and desktop devices.<br/>
<span className='Prj-ov'>Logout Functionality:</span> <br/>
Provides a secure way for users to log out of their accounts.<br/>
<div className='buttons'>
<a href={Chatscream}  target="_blank" rel="noopener noreferrer" ><button className='btn'>  Live Demo </button></a>
    <a href={GitURL}  target="_blank" rel="noopener noreferrer" className='Github'><FaGithub /></a>
    </div>
</p>
    </div>
    <div className='project-2'>
    <div className='Pro-img-2' data-aos="zoom-in-right"  data-aos-duration="1500">
    <img className='d-none d-md-block' src={Waimage1} />
    <img className='d-none d-md-block'src={Waimage2} />
    </div>
   <p data-aos="fade-left" data-aos-duration="1500"> <h3>Weather Wise <br/>(Weather Forecasting Application)</h3>
 <span className='Prj-ov'>Overview:</span><br/>
This weather web application provides <span>real-time weather information </span> for cities around the world. The application is designed with a user-friendly interface and incorporates error handling for smooth functionality.<br/>

<span className='Prj-ov'>Features:</span><br/>
<span>City Search Functionality:</span><br/>
Users can input the name of any <span></span>city, and the app fetches and displays real-time <span></span>weather data for that location.<br/>

<span className='Prj-ov'>Weather Data Display:</span><br/>
Key weather metrics such as <span>temperature,</span> <span>humidity,</span>  <span>wind speed,</span> <span>longitude,</span> and <span>latitude </span>are shown accurately for each city.<br/>

<span className='Prj-ov'>API Integration:</span><br/>
The application fetches weather data using a reliable <span>external API</span> to ensure <span></span>accurate and <span></span>up-to-date information.<br/>

<span className='Prj-ov'>Error Handling:</span><br/>
If the user inputs a city that doesn't exist or if there is an issue with the API, a friendly error message, such as <span>"City not found,"</span> is displayed. Additional error messages are provided for issues with fetching data.<br/>

<span className='Prj-ov'>Tools & Technologies Used:</span><br/>
<span className='Prj-ov'>React:</span><br/>
Developed with <span>React </span>to leverage <span>component-based architecture</span>, enhancing maintainability and scalability.<br/>

<span className='Prj-ov'>API Integration:</span><br/>
<span>External API</span> used to retrieve live weather data.<br/>

<span className='Prj-ov'>Challenges Faced:</span><br/>
<span>Data Fetching Errors:</span><br/>
Initially encountered issues with handling incorrect city inputs and API failures, which were solved by implementing error handling and validation mechanisms.
<div className='buttons'>
<a href={WeatherApp}  target="_blank" rel="noopener noreferrer"><button className='btn'>  Live Demo </button></a>
    <a href={GitURL}  target="_blank" rel="noopener noreferrer" className='Github'><FaGithub /></a>
    </div>
    </p>
    <br/>

   </div>
    <div className='project-3'>
    <div className='Pro-img-3'  data-aos="zoom-in-right" data-aos-duration="1500">
    <img className='d-none d-md-block' src={Tdimage1} />
    <img className='d-none d-md-block' src={Tdimage2} />
    </div>
    <p data-aos="fade-left" data-aos-duration="1500"> <h3>Task Mate <br/> (Smart Task Management Application)</h3><span></span><br/>
    <span className='Prj-ov'>Tech Stack:</span> <span>React,</span> <span>HTML,</span><span>CSS,</span> <span>JavaScript</span><br/>

    <span className='Prj-ov'>Project Overview:</span><br/>
A sleek and <span>user-friendly TO-DO application </span>designed to help users manage their tasks efficiently.
<br/>
<span className='Prj-ov'>Key Features:</span><br/>
<span className='Prj-ov'>Task Creation:</span><br/>

Users can add new tasks easily to<span>stay organized</span> .<br/>
<span className='Prj-ov'>Task Completion:</span><br/>

<span>Mark tasks</span> as complete with a single click.<br/>
<span className='Prj-ov'>Task Deletion:</span><br/>

<span>Remove</span> tasks from the list when no longer needed.<br/>
<span className='Prj-ov'>Persistent Data:</span><br/>

Tasks remain saved even after<span>refreshing the page</span> , thanks to local storage.<br/>
<span className='Prj-ov'>Clean and Attractive UI:</span><br/>

The application features a visually appealing design, ensuring a <span>smooth user experience</span>.<br/>
<div className='buttons'>
   <a href={ToDoApp} target="_blank" rel="noopener noreferrer"   ><button className='btn'>  Live Demo </button></a> 
    
    <a href={GitURL}  target="_blank" rel="noopener noreferrer" className='Github'><FaGithub /></a>
    </div>
 </p>
    
 </div>
 </div>
    </Container>
      
    </>
  )
}

export default Projects
