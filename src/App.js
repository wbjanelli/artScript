import React from "react";
import ImageSlider from "./ImageSlider";
import NavBar from './NavBar';
import './App.css';

const App = () => {
  const slides = [
    { url: `${process.env.PUBLIC_URL}/nativetripeyes.jpeg`, alt: "Chief", title: "Chief" },
    { url: `${process.env.PUBLIC_URL}/tiger8x.png`, title: "Tiger" },
    { url: `${process.env.PUBLIC_URL}/trippynatove.jpeg`, title: "Trip" },
  ]

  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };

  return (
    <>
      <main className="main">
        <NavBar websiteTitle={"artScript"} />
        <div style={containerStyles}>
          <ImageSlider slides={slides} />
        </div>
      </main>
    </>
  );
};

export default App;

// import './App.css';
// import NavBar from './NavBar';

// function App() {
//   return (
//     <>
//       <main className="main">
//         <NavBar websiteTitle={"artScript"} />
        
//       </main>
//     </>
//   );
// }

// export default App;