import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';


const UserWelcome = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Set a timeout to change the loading state after 2 seconds
        const timeoutId = setTimeout(() => {
          setIsLoading(false);
        }, 2000);
    
        // Clear the timeout if the component unmounts or loading state changes
        return () => clearTimeout(timeoutId);
      }, []);
    

  return (
    <>
    <div style={{ paddingTop: "60px" }}></div>
    <motion.div className='h-full' initial={{y:"200vh"}} animate={{y:"0%"}} exit={{y:"-200vh"}} transition={{duration:0.5}}>

    {isLoading ? (
        <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
            <div class="animate-pulse flex space-x-4">
                <div class="rounded-full bg-slate-700 h-10 w-10"></div>
                <div class="flex-1 space-y-6 py-1">
                <div class="h-2 bg-slate-700 rounded"></div>
                <div class="space-y-3">
                    <div class="grid grid-cols-3 gap-4">
                    <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                    <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                    </div>
                    <div class="h-2 bg-slate-700 rounded"></div>
                </div>
                </div>
            </div>
        </div>
    ) : (
    <div className='flex justify-center items-center gap-6'>
        <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
        </div>

        <p className='dark:text-white'>Welcome, Username 😊</p>
        
        
    </div>
    )}
    
    </motion.div>
    </>
  );
}

{/* // <div className="relative">
        //   <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="User profile picture" />
        //   <span className="top-0 left-7 absolute w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
        // </div> */}

export default UserWelcome;
