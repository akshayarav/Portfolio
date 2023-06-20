import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home"
import About from "./components/About/About"
import Projects from "./components/Projects/Projects"
import "./App.css"

function App() {
  return (
    <div>
      <Navbar />
      <div className = "snap-y scroll-snap-stop: always">
        <Home />
        <About />
        <Projects />
      </div>
    </div>
  );
}

export default App;
