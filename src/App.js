import React from "react";
import ImageSlider from "./ImageSlider";
import NavBar from './NavBar';
import './App.css';

const App = () => {
  const slides = [
    { url: `${process.env.PUBLIC_URL}/nativetripeyes.jpeg`, title: "Chief" },
    { url: `${process.env.PUBLIC_URL}/tiger8x.png`, title: "Tiger" },
    { url: `${process.env.PUBLIC_URL}/trippynatove.jpeg`, title: "Trip" },
    { url: `${process.env.PUBLIC_URL}/chillenstatue.jpeg`, title: "Chillin" },
    { url: `${process.env.PUBLIC_URL}/Oldchineseman.jpeg`, title: "OldMan" },
    { url: `${process.env.PUBLIC_URL}/rhinobest.jpeg`, title: "rhino" },
  ]

  const containerStyles = {
    width: "700px",
    height: "400px",
    margin: "0 auto",
  };

  return (
    <>
      <main className="main">
        <NavBar websiteTitle={"artScript"} />
        <div className="slider" style={containerStyles}>
          <ImageSlider slides={slides} />
        </div>
      </main>
    </>
  );
};

export default App;
