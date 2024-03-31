import React from 'react';

const UserWelcome = () => {
  return (
    <>
    <div style={{ paddingTop: "60px" }}></div>
    <div className='flex justify-center items-center gap-6'>
        <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
        </div>

        <p>Welcome, Username 😊</p>
        
        
    </div>
    </>
  );
}

{/* // <div className="relative">
        //   <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="User profile picture" />
        //   <span className="top-0 left-7 absolute w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
        // </div> */}

export default UserWelcome;
