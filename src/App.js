import React, { useState, useEffect } from 'react';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home"
import About from "./components/About/About"
import Projects from "./components/Projects/Projects"
import {MdDarkMode} from 'react-icons/md';
import {HiOutlineSun} from 'react-icons/hi'
import "./App.css"

function App() {
  const [theme, setTheme] = useState('light');
  const [themeImg, setThemeImg] = useState(MdDarkMode)
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      setThemeImg(HiOutlineSun)
    } else {
      setTheme('light');
      setThemeImg(MdDarkMode)
    }
  }
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className = {`App ${theme}`}>
      <Navbar dark = {toggleTheme} img = {themeImg}/>
      <div className = "snap-y scroll-snap-stop: always">
        <Home />
        <About />
        <Projects />
      </div>
    </div>
  );
}

export default App;
