import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faStairs, faTurnUp, faGear } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';


const Pricing = () => {
  return (
        <>
        <motion.div className='h-full' initial={{y:"200vh"}} animate={{y:"0%"}} exit={{y:"-200vh"}} transition={{duration:0.5}}>
        <div style={{paddingTop: "40px"}}></div>

        <div className='flex justify-center items-center'>
              <nav className="flex px-5 py-3 justify-center items-center text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700" aria-label="Breadcrumb" style={{ width: '80px' }}>
                  <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                      <li key="home" className="inline-flex items-center">
                      <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                        <FontAwesomeIcon icon={faDollarSign} className='px-1' />
                        Pricing
                      </a>
                      </li>
                  </ol>
              </nav>
          </div>
          <div style={{paddingTop: "40px"}}></div>

        <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  justify-center place-items-center px-10'>

          <div className="bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-grey-950 relative max-w-md overflow-hidden rounded-xl border border-grey-900 bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat px-8 py-16 shadow-2xl transition-[background-position_0s_ease] hover:bg-[position:200%_0,0_0] hover:duration-[1500ms]">
            <span className="mb-4 inline-flex items-center justify-center rounded-md bg-blue-600 p-2 shadow-lg">
            <FontAwesomeIcon icon={faStairs} style={{"--fa-primary-color": "#37abb3", "--fa-secondary-color": "#251f51",}} />
            </span>
            <h3 className="mb-2 font-medium tracking-tight dark:text-white text-black">Beginner 1 Month</h3>
            <p className="text-sm text-slate-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ex
              obcaecati natus eligendi delectus, cum deleniti sunt in labore nihil
              quod quibusdam expedita nemo.
            </p>
          </div>

      <div className="bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-grey-950 relative max-w-md overflow-hidden rounded-xl border border-grey-900 bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat px-8 py-16 shadow-2xl transition-[background-position_0s_ease] hover:bg-[position:200%_0,0_0] hover:duration-[1500ms]">
          <span className="mb-4 inline-flex items-center justify-center rounded-md bg-green-600 p-2 shadow-lg px-3">
          <FontAwesomeIcon icon={faTurnUp} style={{color: "#FFD43B",}} />
          </span>
          <h3 className="mb-2 font-medium tracking-tight dark:text-white text-black">Basic 2 Month</h3>
          <p className="text-sm text-slate-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ex
            obcaecati natus eligendi delectus, cum deleniti sunt in labore nihil
            quod quibusdam expedita nemo.
          </p>
        </div>


        <div className="bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-grey-950 relative max-w-md overflow-hidden rounded-xl border border-grey-900 bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat px-8 py-16 shadow-2xl transition-[background-position_0s_ease] hover:bg-[position:200%_0,0_0] hover:duration-[1500ms]">
          <span className="mb-4 inline-flex items-center justify-center rounded-md bg-yellow-600 p-2 shadow-lg">
          <FontAwesomeIcon icon={faGear} flip="both" size="lg" style={{color: "#74C0FC",}} />
          </span>
          <h3 className="mb-2 font-medium tracking-tight dark:text-white text-black">Advanced 3 Month</h3>
          <p className="text-sm text-slate-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ex
            obcaecati natus eligendi delectus, cum deleniti sunt in labore nihil
            quod quibusdam expedita nemo.
          </p>
        </div>


        <div className="bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-grey-950 relative max-w-md overflow-hidden rounded-xl border border-grey-900 bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat px-8 py-16 shadow-2xl transition-[background-position_0s_ease] hover:bg-[position:200%_0,0_0] hover:duration-[1500ms]">
          <span className="mb-4 inline-flex items-center justify-center rounded-md bg-red-600 p-2 shadow-lg">
          💎
          </span>
          <h3 className="mb-2 font-medium tracking-tight dark:text-white text-black">Premium 6 Month</h3>
          <p className="text-sm text-slate-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ex
            obcaecati natus eligendi delectus, cum deleniti sunt in labore nihil
            quod quibusdam expedita nemo.
          </p>
        </div>

      </div>
      </motion.div>
      </>
      );
    };
export default Pricing