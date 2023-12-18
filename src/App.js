import React from "react";
import ImageSlider from "./ImageSlider";
import NavBar from './NavBar';
import './App.css';

const App = () => {
  const slides = [
    { url: `${process.env.PUBLIC_URL}/genhis4k.png`, title: "genhis" },
    { url: `${process.env.PUBLIC_URL}/snakecharmer.jpeg`, title: "snakemon" },
    { url: `${process.env.PUBLIC_URL}/nativetripeyes.jpeg`, title: "Chief" },
    { url: `${process.env.PUBLIC_URL}/Oldchineseman.jpeg`, title: "OldMan" },
    { url: `${process.env.PUBLIC_URL}/whitetiger.jpeg`, title: "wt" },
    { url: `${process.env.PUBLIC_URL}/chillenstatue.jpeg`, title: "Chillin" },
    { url: `${process.env.PUBLIC_URL}/trippynatove.jpeg`, title: "Trip" },
    { url: `${process.env.PUBLIC_URL}/tajm2.jpeg`, title: "taj" },
    { url: `${process.env.PUBLIC_URL}/trippybuddha.jpeg`, title: "buddha" },   
    { url: `${process.env.PUBLIC_URL}/TutAI.jpeg`, title: "tut" },
    { url: `${process.env.PUBLIC_URL}/sadhu2.jpeg`, title: "sadhu" },
    { url: `${process.env.PUBLIC_URL}/tiger8x.png`, title: "Tiger" },
  ]

  const containerStyles = {
    width: "700px",
    height: "400px",
    margin: "0 auto",
  };

  return (
    <>
      <main className="main">
        <NavBar websiteTitle={"art[Script]"} />
        <div className="slider" style={containerStyles}>
          <ImageSlider slides={slides} />
        </div>
      </main>
    </>
  );
};

export default App;
