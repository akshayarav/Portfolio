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
                    <p>  <b> Abris (Internship): </b>  <a href = "abris.io"> Abris</a> is a startup focused on AI technologies and Web3. At Abris I have 
                    gained hands on experience with web technologies including React and Angular,  
                    and used MongoDB to develop the website databasepaired with ChatGPT prompt engineering using LangChain. 
                    My work involved building products such as <a href = "aichefs.co"> AIChefs</a>. Under the mentorship of an ex-FAANG CTO, 
                    my experience involved a 2 week sprint work environment complete with stand ups and team-member collaboration. </p>
                    <p>  <b> Boston University Research: </b> As a paid research intern at Boston Univeristy, I worked with Professor Joshua Campbell, who runs a lab focused on 
                    computational applications towards bioinformatics and biology. Working for Dr.Campbell, I have helped develop the Single Cell TTK R package,
                    learning proper package development life cycle techniques and a comprehensive understanding of Git and GitHub. </p>
                    <p>  <b> Cornell Mars Rover (Software Team Member): </b> Cornell Mars Rover is a compeptetive Cornell Engineering Project Team that competes in the yearly
                    URC- University Rover Competition. The team is tasked with building a rover from scratch, which must be capable of several software feats such as
                    Autonomous Navigation. The team consists of several subteams with peers across all engineering disciplines.
                    As a member of the software subteam, I have gained experience in C++ and Python, collaborating with my peers 
                    in a competitive and enjoyable environment in order to succeed in competition. </p>
                </div>
            </div>
        </div>
        </div>
        )
}

export default About