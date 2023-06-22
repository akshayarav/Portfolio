import React from 'react';
import './navbar.css';
import {AiFillMail, AiOutlineGithub, AiOutlineLinkedin} from 'react-icons/ai';
import Pdf from './Resume-AkshayAravind.pdf';

const handleScroll = (name) => {
  var element = document.getElementById(name)
  element.scrollIntoView()
}

function scrollTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const NavBar= (props) =>{
  return (
  <div className="nav">
      <div className = "left">       
        <button className="button-shaded" onClick = {() =>scrollTop()}>
          Home 
        </button>
        <button className="button-shaded" onClick = {() =>handleScroll('about')}>
          About 
        </button>
        <button className="button-shaded" onClick = {() =>handleScroll('projects')}>
          Projects
        </button>
      </div>
      <div className = "right"> 
        <a id = "resume" href={Pdf} target="_blank">
          Resume
        </a>  
        <a href="https://www.linkedin.com/in/akshayaravind26/" target="_blank" style={{color: "black"}}>
          <AiOutlineLinkedin className = "logo"/>
        </a>
        <a href="https://github.com/akshayaravind2004" target="_blank" style={{color: "black"}}>
          <AiOutlineGithub className = "logo"/>
        </a>
        <a href="mailto::akshayaravindpr@gmail.com" style={{color: "black"}}> 
          <AiFillMail className = "logo"/>
        </a>
        <button onClick={props.dark}>
          <div className = "logo">
            {props.img}
          </div>
        </button>
      </div>
  </div>
  )
};
export default NavBar;
