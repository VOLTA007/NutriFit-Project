import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

const GymSlider = () => {
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
      <div className="max-h-[780px] m-auto w-full relative group">
        <div className="w-full h-full bg-center bg-cover duration-500">
          <img src={images[activeIndex]} alt={`Image ${activeIndex + 1}`} />
        </div>
        <button onClick={handlePrevious} className="hidden absolute top-[50%] translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft size={30} />
        </button>
        <button onClick={handleNext} className="hidden absolute top-[50%] translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight size={30} />
        </button>
      </div>
    </>
  );
};

export default GymSlider;
