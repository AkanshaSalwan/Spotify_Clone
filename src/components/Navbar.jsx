import React from 'react'
import {assets} from '../assets/assets'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {

  const navigate = useNavigate()

  return (
    <>
    <div className='w-full flex justify-between items-center font-semibold'>
        <div className='flex items-center gap-2'>
            <img onClick={()=>navigate(-1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_left} alt="" />
            <img onClick={()=>navigate(+1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_right} alt="" />
            {/* searchbox  */}
            <div className="Searchbox">
               <div className="flex items-center bg-gray-800 text-gray-400 rounded-full px-4 py-2 w-96 border border-gray-200">
                      <svg
                        className="h-5 w-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path
                         fillRule="evenodd"
                         d="M10 2a8 8 0 105.293 14.707l4.387 4.386a1 1 0 001.414-1.414l-4.386-4.387A8 8 0 0010 2zm0 2a6 6 0 104.242 10.243A6 6 0 0010 4z"
                         clipRule="evenodd"
                        />
                      </svg>
                         <input
                           type="text"
                           placeholder="What do you want to play?"
                           className="bg-transparent focus:outline-none ml-3 text-white placeholder-gray-600 w-full"
                         />
                            {/* Microphone Icon */}
                                <svg
                                  className="h-5 w-5 text-gray-400 ml-2 cursor-pointer"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                >
                                  <path
                                   fillRule="evenodd"
                                   d="M12 3a3 3 0 013 3v6a3 3 0 01-6 0V6a3 3 0 013-3zm0 11a4 4 0 100 8 4 4 0 000-8z"
                                   clipRule="evenodd"
                                  />
                               </svg>
     


                             {/* Camera Icon */}
                                <svg
                                  className="h-5 w-5 text-gray-400 ml-2 cursor-pointer"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M12 5.5a3.5 3.5 0 00-3.5 3.5V13a3.5 3.5 0 007 0V9a3.5 3.5 0 00-3.5-3.5zM7 13.5v-4a5 5 0 015-5 5 5 0 015 5v4a5 5 0 01-5 5 5 5 0 01-5-5zm5 6a6 6 0 100-12 6 6 0 000 12z"
                                      clipRule="evenodd"
                                    />
                                </svg>
              </div>
           </div>

            {/*serachbox end  */}
        </div>
      
        <div className='flex items-center gap-4'>
            <p className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer'>Explore Premium</p>
            <p className='bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer'>Install App</p>
            <p className='bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center'>D</p>
        </div>
    </div>
    <div className='flex items-center gap-2 mt-4'>
        <p className='bg-white text-black px-4 py-1 rounded-2xl cursor-default'>All</p>
        <p className='bg-black px-4 py-1 rounded-2xl cursor-default'>Music</p>
        <p className='bg-black px-4 py-1 rounded-2xl cursor-pointer'>Podcasts</p>
    </div>
  </>
  )
}

export default Navbar