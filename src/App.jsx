import { useRef } from "react";
import '../src/index.css';
import Header from './components/header/Header';
import Profile from "./sections/Profile";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";

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

  return (
    <>
      {/* Header Section */}
      <Header sections = {sections} />

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

      {/* Footer Section */}
      <section className="bg-[#ececf0] py-4 md:py-8 text-center">
        <p className="text-sm md:text-base">© 2026 Frontend Developer Portfolio. All rights reserved.</p>
      </section>
    </>
  )
}

export default App
