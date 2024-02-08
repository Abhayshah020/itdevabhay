import React, { useState, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import { useInView } from "react-intersection-observer";
import "./index.css";

const LazyLoadedComponent = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Ensures component is loaded only once when it comes into view
    threshold: 0.2, // Adjust as needed
  });

  return <div ref={ref}>{inView && children}</div>;
};

const SuspenseFallback = () => (
  <div className="loading-container">
    <div className="background"></div>
    <div className="spinner"></div>
  </div>
);
const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<SuspenseFallback />}>
        <div className="relative z-0 bg-primary" style={{ overflow: "hidden" }}>
          <LazyLoadedComponent>
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
              <Navbar />
              <Hero />
            </div>
          </LazyLoadedComponent>
          <LazyLoadedComponent>
            <About />
          </LazyLoadedComponent>
          <LazyLoadedComponent>
            <Experience />
          </LazyLoadedComponent>
          <LazyLoadedComponent>
            <Tech />
          </LazyLoadedComponent>
          <LazyLoadedComponent>
            <Works />
          </LazyLoadedComponent>
          <LazyLoadedComponent>
            <StarsCanvas />
          </LazyLoadedComponent>
          <div className="relative z-0">
            <LazyLoadedComponent>
              <Contact />
            </LazyLoadedComponent>
          </div>
        </div>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
