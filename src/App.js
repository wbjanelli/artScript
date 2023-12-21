import React from "react";
import ImageSlider from "./ImageSlider";
import NavBar from './NavBar';
import './App.css';

const App = () => {
  const slides = [
    { url: `${process.env.PUBLIC_URL}/genhis4k.png`, title: "genhis" },
    { url: `${process.env.PUBLIC_URL}/dalisChapel.jpeg`, title: "dalischapel" },
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
    { url: `${process.env.PUBLIC_URL}/Ukiyo-e.jpeg`, title: "sadhu" },
    { url: `${process.env.PUBLIC_URL}/tigertemple.jpeg`, title: "Tiger" },
    { url: `${process.env.PUBLIC_URL}/flutemon.jpeg`, title: "flutemon" },
    { url: `${process.env.PUBLIC_URL}/gorgetrip.jpeg`, title: "gorgetrip" },
    { url: `${process.env.PUBLIC_URL}/Himalayas.jpeg`, title: "Himalayas" },
    { url: `${process.env.PUBLIC_URL}/indianDJ.jpeg`, title: "indianDJ" },
    { url: `${process.env.PUBLIC_URL}/kayanpeople.jpeg`, title: "kayanpeople" },
    { url: `${process.env.PUBLIC_URL}/monkeyTemp.jpeg`, title: "monkeyTemp" },
    { url: `${process.env.PUBLIC_URL}/mattwritesbooks.jpeg`, title: "mattwritesbooks" },
    { url: `${process.env.PUBLIC_URL}/pipemaster.jpeg`, title: "pipemaster" },
    { url: `${process.env.PUBLIC_URL}/praha.jpeg`, title: "praha" },
    { url: `${process.env.PUBLIC_URL}/rocket2.jpeg`, title: "rocket2" },
    { url: `${process.env.PUBLIC_URL}/origamiwarrirtiger.jpeg`, title: "origamiwarrirtiger" },
    { url: `${process.env.PUBLIC_URL}/japmaple.jpeg`, title: "japmaple" },
    { url: `${process.env.PUBLIC_URL}/creeper.jpeg`, title: "creeper" },
    { url: `${process.env.PUBLIC_URL}/deepBreath.jpeg`, title: "deepBreath" },
    { url: `${process.env.PUBLIC_URL}/medusaTrip.jpeg`, title: "medusaTrip" },
    { url: `${process.env.PUBLIC_URL}/beachhaus.jpeg`, title: "beachhaus" },
    { url: `${process.env.PUBLIC_URL}/eskimo.jpeg`, title: "eskimo" },
    { url: `${process.env.PUBLIC_URL}/dia.jpeg`, title: "dia" },
    { url: `${process.env.PUBLIC_URL}/capecruisen.jpeg`, title: "capecruisen" },
    { url: `${process.env.PUBLIC_URL}/wildindianman.jpeg`, title: "wildindianman" },
    { url: `${process.env.PUBLIC_URL}/tripSnake.jpeg`, title: "tripSnake" },
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
