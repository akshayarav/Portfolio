import React, { useState, useEffect, useRef } from "react";
import { SnapList, SnapItem, useVisibleElements, useScroll } from 'react-snaplist-carousel';
import Preloader from "../src/components/Pre";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, updateLoad] = useState(true);
  const snapList = useRef(null);

  const goToSection = useScroll({ ref: snapList });
  const currentSection = useVisibleElements(
    { ref: snapList, debounce: 10 },
    elements => elements[0]
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionIndex) => {
    if (goToSection) {
      goToSection(sectionIndex);
    }
  };

  if (load) {
    return <Preloader load={load} />;
  }

  return (
    <div className="App">
      {/* Floating Navigation */}
      <nav className="floating-nav">
        <button
          onClick={() => scrollToSection(0)}
          className={`nav-dot ${currentSection === 0 ? 'active' : ''}`}
          title="Home"
        >
          <span>Home</span>
        </button>
        <button
          onClick={() => scrollToSection(1)}
          className={`nav-dot ${currentSection === 1 ? 'active' : ''}`}
          title="About"
        >
          <span>About</span>
        </button>
      </nav>

      {/* Snap Scroll Container */}
      <SnapList
        ref={snapList}
        direction="vertical"
        height="100vh"
        hideScrollbar={false}
        snapType="mandatory"
      >
        <SnapItem snapAlign="start" height="100vh">
          <Home />
        </SnapItem>

        <SnapItem snapAlign="start" height="100vh">
          <About />
        </SnapItem>
      </SnapList>
    </div>
  );
}

export default App;