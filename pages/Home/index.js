import SimpleSlider from '@/Components/SimpleSlider';
import PayPage from '@/Components/PayPage';
import Subscription from '@/Components/Subscription';
import { useSession } from 'next-auth/react';
import React from 'react';


const Home = () => {
  const session = useSession();
  const status = session.status;
  return (
    <>
      <SimpleSlider />
      <div style={{paddingTop: '120px'}}></div>
      {/* {status === 'authenticated' && <Subscription />} */}
      {/* <PayPage /> */}

    </>
  );
};

export default Home;
