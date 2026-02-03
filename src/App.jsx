import { useState, useRef, useEffect } from "react";
import '../src/index.css';
import Header from './components/header/Header';
import Profile from "./sections/Profile";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const projectRef = useRef(null);
  const expRef = useRef(null);
  const contactRef = useRef(null);

  const sections = [ 
    { label: "Home", ref: homeRef },
    { label: "About", ref: aboutRef }, 
    { label: "Skills", ref: skillRef }, 
    { label: "Projects", ref: projectRef },
    { label: "Experience", ref: expRef },
    { label: "Contact", ref: contactRef }
  ];

  const [ darkMode, setDarkMode ] = useState(() => {
      return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const html = document.documentElement;

    if(darkMode) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode])


  return (
    <>
      {/* Header Section */}
      <Header sections = {sections} darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Profile Section */}
     <Profile refProp = {homeRef} />

      {/* About Section */}
      <About refProp={aboutRef} />

      {/* Skills Section */}
      <Skills refProp={skillRef} />

      {/* Project Section */}
      <Projects refProp={projectRef} />

      {/* Experience Section */}
      <Experience refProp={expRef} />

      {/* Contact Section */}
      <Contact refProp={contactRef}/>

      {/* Scroll To Top Section */}
      <ScrollToTop />

      {/* Footer Section */}
      <section className="bg-[#ececf0] dark:bg-[#181818] py-4 md:py-8 text-center">
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">© 2026 Frontend Developer Portfolio. All rights reserved.</p>
      </section>
    </>
  )
}

export default App
