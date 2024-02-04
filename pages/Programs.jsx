import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';



const Programs = () => {
  return (
    <div>
    <Navbar />
    <div className='bg-gradient-to-b from-sky-600 to-blue-900'>
      <div className='container mx-auto flex flex-col items-center text-center pt-4 mt-28'>
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-6 drop-shadow-xl'>Programs</h1>
        <h2 className='text-xl md:text-2xl lg:text-3xl mt-4 underline decoration-yellow-500'>Your Experience Awaits</h2>
        <p className='mt-3 mx-4 md:text-xl lg:text-2xl'>Phoenix Soccer Club takes a multifaceted approach to the sport of soccer. Not only do we focus on the technicality of the game, but we make sure children are enjoying every second of their experience.</p>
      </div>
        <img
          src='images/group7.jpg'
          className='lg:mt-14 mt-8 lg:mx-auto max-h-[800px]'
        />
    <section className='bg-gray-950 pb-6'>
      <div className='grid grid-cols-1 lg:grid-cols-6 mt-8'>
        <div className='lg:col-span-2 border-t-2 text-center'>
          <h1 className=' lg:mt-16 mt-4 lg:mb-16 text-3xl lg:text-5xl font-bold text-center drop-shadow-xl underline decoration-yellow-500'>Seasonal Classes</h1>
          <p className='text-center text-xl mt-4 mx-4 lg:pt-8 lg:text-3xl mb-4'>The primary focus is to create a fun imaginative environment where athletes can focus on developing soccer skills. Classes are oriented around individual development through themed classes with athletes interests in mind.</p>
          <Link legacyBehavior href='/Procedure'>
            <a className="bg-sky-600 hover:bg-sky-700 text-white font-bold mt-6 py-2 px-4 rounded mx-auto drop-shadow-lg">
                Learn More
            </a>
            </Link>
        <img 
        className='mx-auto mt-6'        
        src='images/cropbabies.jpg'
        width={450}
         />
         
        </div>

        <div className='lg:col-span-2 border-t-2 text-center'>
          <h1 className=' lg:mt-16 mt-4 lg:mb-16 text-3xl lg:text-5xl font-bold text-center drop-shadow-xl underline decoration-yellow-500'>Camps</h1>
          <p className='text-center text-xl mt-4 mx-4 lg:pt-8 lg:text-3xl mb-4'>Phoenix Soccer Camps are designed to provide the best that there is to offer in terms of development, creativity and fun. Camps are 3 hours of soccer and activities for children ages 3-5yrs. Younger children are exposed to soccer while developing their individual skills. Our coaches are highly experienced and thrilled to share their knowledge and love of the game with your children.</p>
          <Link legacyBehavior href='/Procedure'>
            <a className="bg-sky-600 hover:bg-sky-700 text-white font-bold mt-6 py-2 px-4 rounded mx-auto drop-shadow-lg">
                Learn More
            </a>
            </Link>
        <img 
        className='mx-auto mt-6'        
        src='images/cropbaby1.jpg'
        width={450}
         />
        </div>

        <div className='lg:col-span-2 border-t-2 text-center'>
          <h1 className=' lg:mt-16 mt-4 lg:mb-16 text-3xl lg:text-5xl font-bold text-center drop-shadow-xl underline decoration-yellow-500'>Private Classes</h1>
          <p className='text-center text-xl mt-4 mx-4 lg:pt-8 lg:text-3xl mb-4'>Looking for private classes, to enhance specific or various aspects, our coaches here at Phoenix Soccer are ready and eager to bring your athlete to the next level. To get availability and schedule classes please reach out to us.</p>
          <Link legacyBehavior href='/Contact'>
            <a className="bg-sky-600 hover:bg-sky-700 text-white font-bold mt-6 py-2 px-4 rounded mx-auto drop-shadow-lg">
                Contact Us
            </a>
          </Link>
          <img 
            className='mx-auto mt-6'        
            src='images/snip.png'
            width={400}
          />
        </div>
       
      </div>
      </section> 
    </div>
  <Footer />
</div>
)
}


export default Programs;
