import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import axios from 'axios';
import { useSession } from 'next-auth/react';

const Subscription = () => {
  const { data: session, status } = useSession();
  const [isSubscribed, setIsSubscribed] = useState(null);
  const isAuthenticated = status === "authenticated"; 
 

  useEffect(() => {
    // Connect to the WebSocket server
    const socket = io('http://localhost:3001')
  
    // Listen for data updates from the server
    socket.on('dataUpdate', () => {
      fetchSubs();
    });
  
    // Fetch initial subscription status (optional)
    fetchSubs();
  
    // Clean up the WebSocket connection
    return () => {
      socket.disconnect();
    };
  }, []);


  const fetchSubs = async () => {
    if (isAuthenticated && session?.user?.email) {
      try {
        const response = await axios.get(`/api/subs?email=${session.user.email}`);
        const { is_subscribed } = response.data; // Extract the boolean value
        setIsSubscribed(is_subscribed); // Set the boolean value to the state
      } catch (error) {
        console.error('Error fetching subs:', error);
      }
    } else {
      // Handle the case when the user is not authenticated
    }
  };

  if (isSubscribed === null) {
    return <div></div>;
  }

  return (
    <>
      {isAuthenticated && (
        <>
          {isSubscribed ? (
            <div className='flex justify-center items-center pb-10 mt-8'>
              <div className="bg-green-400 rounded-sm p-2">
                Subscribed
              </div>
            </div>
          ) : (
            <div className='flex justify-center items-center pb-10 mt-8'>
              <div className="bg-red-400 rounded-sm p-2">
                Unsubscribed
              </div>
            </div>
          )}
        </>
      )}
      
      {!isAuthenticated && (
        <div>
          
        </div>
      )}
    </>
  );
};

export default Subscription;
