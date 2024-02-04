import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  About,
  Contact,
  Navbar,
  Tech,
  StarsCanvas,
  Feedbacks,
  Hero,
  Works,
  Experience,
} from "./components";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        <About />
        <Experience />  
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
