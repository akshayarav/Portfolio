import "./Projects.css"
import Header from "../Header/Header"

function Projects(props) {
    return (
        <div id = "projects_wrapper"> 
            <div id = "projects">
                <Header name = "Projects" />
            </div>
            <div id = "projects_flex">
                <div className="card">
                    <div class="card-body">
                        <h5 class="card-title">Personal Website</h5>
                        <p class="card-text">View the React code and GitHub Repo for this website! </p>
                        <a target="_blank" href="https://github.com/akshayaravind2004/Portfolio" class="btn btn-primary">GitHub</a>
                    </div>
                </div>
            </div>
        </div>
        )
}

export default Projects