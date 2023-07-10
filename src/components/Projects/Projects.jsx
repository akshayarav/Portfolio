import "./Projects.css";
import Header from "../Header/Header";
import FitnessAI from "./logos/fitnessAILogo.png"
import Personal from "./logos/favicon.png"

function Projects(props) {
    return (
        <div id="projects_wrapper"> 
            <div id="projects">
                <Header name="Projects" />
            </div>
            <div id="projects_flex">
                <div className="card">
                    <div className="card-flipper">
                        <div className="card-front">
                            <h5 className="card-title">Personal Website</h5>
                            <img className = "card_logo" src = {Personal} />
                        </div>
                        <div className="card-back">
                            <p className="card-text">View the React code and GitHub Repo for this website!</p>
                            <a target="_blank" href="https://github.com/akshayaravind2004/Portfolio" className="btn btn-primary">GitHub</a>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-flipper">
                        <div className="card-front">
                            <h5 className="card-title">FitnessAI</h5>
                            <img className = "card_logo" src = {FitnessAI} />
                        </div>
                        <div className="card-back">
                            <p className="card-text">A Full Stack project using OpenAI's API and ChatGPT 3.5 to generate custom workout plans!</p>
                            <a target="_blank" href="https://fitness-ai.netlify.app/" className="btn btn-primary">Website</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
