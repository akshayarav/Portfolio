import React from 'react'
import "./About.css"
import Header from '../Header/Header'

function About(props) {
    return (
        <div id = "about_wrapper">
            <div id = "about">
                <Header name = "About Me" />
            </div>
            <div id="aboutMe">
                <h3> Biography </h3>
                <p>
                I'm a enthusiast for innovation. Technology has always been prelavent within my life. From my fascination with hardware to interacting with software, 
                the endless possibilities of modern technology and its potential for innovation inspires me to this day. 
                Furthermore, I have been coding since highschool, creating projects as an entertaining hobby, with Python being my first language.
                <br></br>
                Currently, I'm a student at the College of Engineering at Cornell University, planning to graduate in 2025. Subsequent to my fascination
                with technology, I've found myself majoring in Computer Science. My work experience has made me proficient with full stack software engineering, 
                using skills in web development and server side technologies to create interactive apps. Further experience in Computer Science research
                at Boston University has let me gain skills in Data Analytics and R, through developing R packages for use in bioinformatics. Furthermore,
                with exciting innovation in AI and ChatGPT, I've been able to create applications through prompt engineering and LangChain for my internship at Abris.
                <br></br>
                </p>
                <h3> Skills </h3>
                <b> Languages: </b> Python, Java, JavaScript, C++, R, HTML, CSS  
                <br></br>
                <b> Frameworks: </b> React, Angular, LangChain
                <br></br>
                <b>Developer Tools: </b> Git, GitHub, VS Code, IntelliJ, Docker, MongoDB, Postman
                <br></br>
                <br></br>
                <h3>Relevant Experience</h3>
                <b> - Abris (Internship): </b> <p> <a href = "abris.io"> Abris</a> is a startup focused on AI technologies and Web3. At Abris I have 
                gained hands on experience with web technologies including React and Angular,  
                and used MongoDB to develop the website databasepaired with ChatGPT prompt engineering using LangChain. 
                My work involved building products such as <a href = "aichefs.co"> AIChefs</a>. Under the mentorship of an ex-FAANG CTO, 
                my experience involved a 2 week sprint work environment complete with stand ups and team-member collaboration. </p>
                <b> - Boston University Research: </b> <p> As a paid research intern at Boston Univeristy, I worked with Professor Joshua Campbell, who runs a lab focused on 
                computational applications towards bioinformatics and biology. Working for Dr.Campbell, I have helped develop the Single Cell TTK R package,
                learning proper package development life cycle techniques and a comprehensive understanding of Git and GitHub. </p>
                <b> - Cornell Mars Rover (Software Team Member): </b> <p> Cornell Mars Rover is a compeptetive Cornell Engineering Project Team that competes in the yearly
                URC- University Rover Competition. The team is tasked with building a rover from scratch, which must be capable of several software feats such as
                Autonomous Navigation. The team consists of several subteams with peers across all engineering disciplines.
                As a member of the software subteam, I have gained experience in C++ and Python, collaborating with my peers 
                in a competitive and enjoyable environment in order to succeed in competition. </p>
                <br></br> <br></br> 
                <br></br> <br></br> 
            </div>
        </div>
        )
}

export default About