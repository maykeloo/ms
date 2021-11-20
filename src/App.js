import React, { useState } from "react";
import "./App.css";
import { Sections } from "./appElements";
import Header from "./Components/Header/header";
import Services from "./Components/Services/Services";
import Sidebar from "./Components/Sidebar/Sidebar";
import { ParallaxProvider } from 'react-scroll-parallax';
import Quote from "./Components/Quote/Quote";
import About from "./Components/About/About";
import Works from "./Components/Works/Works";
import Contact from "./Components/Contact/Contact";
import { HashRouter as Router } from 'react-router-dom'

const App = () => {
  const [visibility, setVisible] = useState(false);
  const setVisibleHandler = () => setVisible(!visibility);

  return (
    <>  
    <Router hashType = 'noslash'>
      <ParallaxProvider>
        <Sections name = 'home'>
          <Sidebar isSidebarVisible = {visibility} changeVisibility = {setVisibleHandler}/>
          <Header isSidebarVisible = {visibility} changeVisibility = {setVisibleHandler}/>
          <Services/>
          <Quote/>
          <About/>
          <Works/>
          <Contact/>
        </Sections>
      </ParallaxProvider>
      </Router>
    </>
  );
};

export default App;
