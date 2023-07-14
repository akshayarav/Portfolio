import React from 'react'
import "./About.css"
import Header from '../Header/Header'

function About(props) {
    return (
        <div id = "main">
        <div id = "about_wrapper">
            <div id = "about">
                <Header name = "About Me" />
            </div>
            <div id="aboutMe">
                <div id = "biography">
                    <h3> Biography </h3>
                    <p>
                    I'm an avid learner who loves challenge. Computer Science is an extension of these interests, with technology guiding my passions. 
                    I've dabbled with coding several times in highschool, but started to really learn its capabilities in late 2022, when I took an online Python course offerred by the 
                    University of Helsinki. Through this experience my fascination with software bloomed and continues to expand as I am constantly faced with challenges that require the tenacity to learn.
                    
                    <br></br>
                    <br></br>
                    Currently, I'm a student at the College of Engineering at Cornell University, planning to graduate in 2025. Subsequent to my fascination
                    with technology, I've found myself majoring in Computer Science. My experience in both work and personal projects has made me proficient with full stack software engineering, 
                    using skills in web development and server side technologies to create interactive apps. Beyond Full Stack, I have a passion for AI technologies and Machine Learning,
                    and I hope to explore these avenues in my future career.
                    <br></br>
                    </p>
                </div>
                <div id = "skills">
                    <h3> Skills </h3>
                    <p>  <b> Languages: </b>  Python, Java, JavaScript, C++, R, HTML, CSS </p>  
                    <p> <b> Frameworks: </b>  React, Angular, FastAPI, LangChain </p> 
                    <p> <b>Developer Tools: </b>  Git, GitHub, VS Code, IntelliJ, Docker, MongoDB </p>
                </div>
                <div id="experience">
                <h3>Relevant Experience</h3>

<p>
  <strong>Abris Internship:</strong> At <a href="https://abris.io" target="_blank">Abris</a>, an innovative startup specializing in AI technologies and Web3, I've garnered hands-on experience with web technologies, including React and Angular. These technologies have been instrumental in developing functional websites that interact with ChatGPT via LangChain prompt engineering. My contributions include building products such as <a href="https://aichefs.co" target="_blank">AIChefs</a>. During my tenure, I embraced a fast-paced, collaborative learning environment throughout two-week sprint cycles.
</p>

<p>
  <strong>Boston University Research:</strong> Serving as a paid research intern under Professor Joshua Campbell at Boston University, I've been actively involved in a lab dedicated to computational applications within bioinformatics and biology. I've contributed to the development of the singlecellTK R package, gaining a robust understanding of the package development lifecycle and the effective use of Git.
</p>

<p>
  <strong>Cornell Mars Rover - Software Team Member:</strong> As part of the Cornell Mars Rover project, a competitive team under Cornell Engineering, we participate in the annual University Rover Competition (URC). The project involves building a rover capable of various software tasks, such as Autonomous Navigation. Our team comprises subteams from all engineering disciplines. As a software subteam member, I've honed my skills in C++ and Python while enjoying the camaraderie of a competitive and collaborative environment.
</p>

                </div>
            </div>
        </div>
        </div>
        )
}

export default About