import styles from '../styles/GymSlider.module.css';
import React, { useEffect, useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

const GymSlider = ({ children: images }) => {
  const [curr, setCurrIndex] = useState(0);

  const handleNext = () => {
    setCurrIndex((curr) => (curr === images.length - 1 ? 0 : curr + 1));
  };

  const handlePrevious = () => {
    setCurrIndex((curr) => (curr - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="overflow-hidden max-h-[780px] m-auto w-full relative group">
        <div className="flex w-full h-full bg-center bg-cover duration-500 transition-transform ease"
        style={{transform: `translateX(-${curr * 100}%)`}}
        >
          {images}
        </div>
        <div>
          <button onClick={handlePrevious}  className=" absolute top-[50%] translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft size={30} />
          </button>
          <button onClick={handleNext} className=" absolute top-[50%] translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight size={30} />
          </button>
        </div>
      </div>
    </>
  );
};

export default GymSlider;
