import React from "react";
import Navbar from "./Components/Navbar";
import HeroSlider from "./Components/HeroSlider";
import Course from "./Components/Course";
import Service from "./Components/Service";
import Domains from "./Components/Domains";
import Blogs from "./Components/Blogs";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar/>
      <HeroSlider/>
      <Course/>
      <Service />
      <Domains />
      <Blogs />
      <Footer />
    </>
  );
}

export default App; 

