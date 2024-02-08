import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
  return (
    <section
      id="hero"
      className='lg:py-16 lg:pb-32 bg-local bg-cover bg-center h-screen w-screen relative'
      style={{
        backgroundImage: 'url("/images/fall.jpg")',
        minHeight: '500px',
      }}
    >
      <div className='grid grid-cols-1 lg:grid-cols-4'>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='col-span-4 flex items-center justify-center text-center sm:text-center lg:w-full h-full absolute top-0 right-0 left-0'
        >
          <div className="text-white relative z-10">
            <h1 className='text-yellow-400 text-center p-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 '>
              Phoenix Soccer Club
            </h1>
            <h2 className='text-white text-center pb-2 px-2 text-2xl sm:text-3xl lg:text-4xl font-bold mb-10'>A creative and technical environment for the youth</h2>
            <div className="items-center">
              
              <Link href='/Programs'>
              <button className="bg-gray-950 ring-2 ring-sky-600 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded mr-4 drop-shadow-lg">
                Programs
              </button>
              </Link>

              <Link href='https://www.hisawyer.com/phoenix-soccer-club/auth/log-in'>
              <button className="bg-sky-600 ring-2 ring-sky-600 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded drop-shadow-lg">
                Register
              </button>
              </Link>

            </div>
          </div>
        </motion.div>
      </div>
      <div className="absolute top-0 right-0 bottom-0 left-0 bg-black opacity-50"></div>
    </section>
  );
};

export default Hero;
