import React from "react";
import Header from "./components/Header/Header.jsx";
import { Hero } from "./components/Hero/Hero.jsx";
import HeroTwo from "./components/Hero/HeroTwo.jsx";
import HeroThree from "./components/Hero/HeroThree.jsx";
import Footer from "./components/Footer/Footer.jsx";

const App = () => {
  return (
    <div className="relative ">
      <video
        src="/img/bg.mp4"
        className="w-full h-full object-cover absolute top-0 left-0"
        type="video/mp4"
        loop
        autoPlay
        muted
      >
        Your Browser does not support video tags
      </video>
      <div className="relative">
        <Header />
        <Hero />
        <HeroTwo />
        <HeroThree />
        <Footer />
      </div>
    </div>
  );
};

export default App;
