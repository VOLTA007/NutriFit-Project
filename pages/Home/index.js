import GymSlider from '@/Components/GymSlider';
import PayPage from '@/Components/PayPage';
import Subscription from '@/Components/Subscription';
import { useSession } from 'next-auth/react';
import React from 'react';


const Home = () => {
  const images = ['./Gym1.jpg', './Gym2.jpg', './Gym3.jpg'];
  const session = useSession();
  const status = session.status;
  return (
    <>
      <GymSlider>
        {images.map((image, index) => (
          <img key={index} src={image} />
        ))}
      </GymSlider>
      <div style={{paddingTop: '120px'}}></div>
      {status === 'authenticated' && <Subscription />}
      <PayPage />
    </>
  );
};

export default Home;
