import GymSlider from '@/Components/GymSlider';
import React from 'react';

const Home = () => {
  const images = ['./Gym1.jpg', './Gym2.jpg', './Gym3.jpg'];

  return (
    <>
      <GymSlider>
        {images.map((image, index) => (
          <img key={index} src={image} />
        ))}
      </GymSlider>
    </>
  );
};

export default Home;
