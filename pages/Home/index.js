import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

const Home = () => {
  const images = ['./Gym1.jpg', './Gym2.jpg', './Gym3.jpg'];
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  setTimeout(() => {
    handleNext()
  }, 5000);

  return (
    <>
      
    </>
  );
};

export default Home;
