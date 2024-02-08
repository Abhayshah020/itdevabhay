import React, { lazy, Suspense } from "react";
const Hero = lazy(() => import("./Hero"));
const Navbar = lazy(() => import("./Navbar"));
const About = lazy(() => import("./About"));
const Tech = lazy(() => import("./Tech"));
const Experience = lazy(() => import("./Experience"));
const Works = lazy(() => import("./Works"));
const Feedbacks = lazy(() => import("./Feedbacks"));
const Contact = lazy(() => import("./Contact"));
const CanvasLoader = lazy(() => import("./Loader"));

const EarthCanvas = lazy(() => import("./canvas/Earth"));
const BallCanvas = lazy(() => import("./canvas/Ball"));
const ComputersCanvas = lazy(() => import("./canvas/Computers"));
const StarsCanvas = lazy(() => import("./canvas/Stars"));

export {
  Hero,
  Navbar,
  About,
  Tech,
  Experience,
  Works,
  Feedbacks,
  Contact,
  CanvasLoader,
  EarthCanvas,
  BallCanvas,
  ComputersCanvas,
  StarsCanvas,
};