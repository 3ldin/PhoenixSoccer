import React from 'react'
import Navbar from '@/components/navbar'
import Footer from '../components/Footer'

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <div className='bg-gradient-to-b from-sky-600 to-blue-900 pb-10'>
        <div className='container mx-auto flex flex-col items-center text-center pt-4 mt-28'>
          <h1 className='text-6xl font-bold text-white mt-6 drop-shadow-xl'>About Us</h1>
          <h2 className='text-xl md:text-2xl lg:text-3xl mt-4 font-bold text-yellow-500'>We're The Best There Is!</h2>
          <p className='mt-3 mx-4 md:text-xl lg:text-2xl'>With more than 20 years of experience combined, Phoenix Soccer Club staff have been promoting and developing the youths across New York City.</p>
        </div>
          <img
            src='images/cone.jpg'
            className='lg:mt-14 mt-8 lg:mx-auto'
          />
        <div className='grid grid-cols-1 lg:grid-cols-4 mt-8'>
          <div className='lg:col-span-2'>
            <h1 className=' lg:mt-16 lg:mb-20 text-3xl lg:text-5xl font-bold text-center drop-shadow-xl text-yellow-500'>Our Philosophy</h1>
            <p className='text-center text-xl mt-4 mx-4 lg:pt-8 lg:text-3xl'>We are educators, parents and friends who share the love for the beautiful game.</p>
            <p className='text-center text-xl mx-4 mt-4 lg:pt-8 lg:text-3xl'>We are professionals with over 20 years of experience in early childhood education.</p>
            <p className='text-center text-xl mx-4 mt-4 lg:pt-8 lg:text-3xl'>Our hope is to cultivate healthy physical and emotional habits in children ages 2-12.</p>
            <p className='text-center text-xl mx-4 lg:mx-8 mt-4 lg:pt-8 lg:text-3xl mb-4'>At Phoenix FC, we believe every child is unique and capable.  We seek to teach lessons of fairness, compassion, responsibility and team work through a creative and imaginative world of soccer.  We strongly believe that kids playing sports should be about learning the game they are playing and having fun doing it.</p>
          </div>
          <img 
          className='lg:col-span-2 mx-auto'        
          src='images/phoenix4.png'
          width={800}
           />

      <h1 className='lg:col-span-4 mb-10 mx-auto text-3xl lg:text-5xl font-bold text-center drop-shadow-xl text-yellow-500'>Meet The Coaches</h1>
        <div className='lg:col-span-2 mx-auto text-center '>
          <img
          src='images/face2.jpg'
          className='mx-auto'
          width={400}
          />
          <h2 className='text-2xl font-semibold my-2 drop-shadow-xl text-yellow-500'>Coach Miguel</h2>
          <h3 className='text-xl mx-6 mb-6 '>"As a father of two, I know the importance of a quality enrichment program for children ages 2-12. Now, more than ever, our young ones need the social support to either prepare or reintegrate into school. My experience in early childhood goes back 14 years, I’ve worked as a soccer coach for children since 2008, I’ve also worked as a kindergarten teacher assistant at PS 321 in Park slope. I am currently a public school Teacher in Bensonhurst and the girl’s soccer coach of my school’s team. I know how crucial it is for young children to develop motor and social skills in order to be successful in the school environment. My coaching style is silly, fun and patient. I adjust to the level and age groups. I can't wait to be your first coach in the sport I hope becomes your passion as it is mine."</h3>
        </div>
        
        
      
        <div className='lg:col-span-2 mx-auto text-center '>
          <img
          src='images/face1.jpg'
          className='mx-auto'
          width={400}
          />
          <h2 className='text-2xl font-semibold my-2 drop-shadow-xl text-yellow-500'>Coach Emir</h2>
          <h3 className='text-xl mx-6 mb-6  '>"I love the sport of football, from all aspects imaginable but none more so than the technical. The brilliance that is exhibited by players by not just using their well trained and developed muscles but from using their intellect in combination with those honed muscles. As a college player and active league player, I hope to bring that same passion and technically outlook to Phoenix Soccer Club. Over the past decade I’ve been coaching children from various ages, crafting my own skill when it comes to teaching, I’ve worked with various clubs through NYC and helped friends bring their own clubs to the successful level they are now. I aim to the same here."</h3>
        </div>
      


        </div>
      </div>
    <Footer />
  </div>
  )
}

export default AboutPage