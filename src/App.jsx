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

const LazyLoadedComponent = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Ensures component is loaded only once when it comes into view
    threshold: 0.5, // Adjust as needed
  });

  return <div ref={ref}>{inView && children}</div>;
};

const SuspenseFallback = () => <div>Loading...</div>;
const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<SuspenseFallback />}>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
            <StarsCanvas />
          </div>
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
          <div className="relative z-0">
            <LazyLoadedComponent>
              <Contact />
            </LazyLoadedComponent>
            <StarsCanvas />
          </div>
        </div>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
