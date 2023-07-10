import './Home.css';
import {AiOutlineArrowDown} from 'react-icons/ai'

function handleScroll() {
    var element = document.getElementById('about')
    element.scrollIntoView()
  }

export default function Home(props) {
    return (
    <div id = "home_wrapper">
        <div id = "home">
            <h2 className = "intro"> Hey, I'm</h2>
            <h1 id = "title" className = "title_text"> Akshay Aravind</h1>
        </div>
        <div className = "scrollNext">
            <button onClick = {handleScroll}> Learn About Me  </button>
            <button onClick = {handleScroll}> <AiOutlineArrowDown /> </button>
        </div>
    </div>
    )

}