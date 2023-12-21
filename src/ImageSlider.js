import React, { useState, useEffect, useCallback } from "react";
import "./ImageSlider.css";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = useCallback(() => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides.length]);

  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides.length]);

  const goToSlide = useCallback(
    (slideIndex) => {
      setCurrentIndex(slideIndex);
    },
    []
  );

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case "ArrowLeft":
          goToPrevious();
          break;
        case "ArrowRight":
          goToNext();
          break;
        default:
          break;
      }
    };

    // Add event listener for keyboard arrow keys
    document.addEventListener("keydown", handleKeyDown);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };

    // Add dependencies to the dependency array
  }, [currentIndex, goToNext, goToPrevious]);

  const slideStylesWithBackground = {
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  // Display only 10 dots
  const totalDots = 10;
  const startDot = Math.max(0, currentIndex - Math.floor(totalDots / 2));
  const visibleDots = slides.slice(startDot, startDot + totalDots);

  return (
    <div className="slider">
      <div>
        <div onClick={goToPrevious} className="left-arrow">
          ❰
        </div>
        <div onClick={goToNext} className="right-arrow">
          ❱
        </div>
      </div>
      <div style={slideStylesWithBackground} className="slide"></div>
      <div className="dots-container">
        {visibleDots.map((_, dotIndex) => (
          <div
            key={dotIndex}
            onClick={() => goToSlide(startDot + dotIndex)}
            className="dot"
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
