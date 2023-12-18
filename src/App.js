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

import React from "react";
import ImageSlider from "./ImageSlider";
import NavBar from './NavBar';
import './App.css';

const App = () => {
  const slides = [
    { url: "http://localhost:3000/trippyshaman.jpg", title: "Chief" },
    { url: "http://localhost:3000/nativetripeyes.jpg", title: "Shamon" },
    { url: "http://localhost:3000/tiger8x.png", title: "Tiger" },
    { url: "http://localhost:3000/trippynatove.jpg", title: "Trip" },
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
