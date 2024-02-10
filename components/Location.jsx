import React from 'react'

const Location = () => {
  return (
    <section className='bg-gradient-to-b from-yellow-400 to-yellow-500 py-4 w-screen'>
        <div className='container mx-auto text-center'>
          <h2 className="text-4xl font-bold mb-8 text-sky-600 ">NYC Based</h2>
          <div className='flex flex-col items-center justify-center '>
            <div className='text-xl md:text-2xl lg:text-3xl mx-4'>
                <p className='mb-4 drop-shadow-xl'>
                    We are dedicated to creating a secure and enjoyable haven for your child's growth. Enroll today, and watch as your child embraces the world's most beloved sport in an environment that nurtures their potential.
                </p>
                <img 
        src='/images/location.PNG'
        className='mx-auto'
        />
                <p className='mt-4 drop-shadow-xl'>
                    Embark on this exciting journey with us! Our classes kick off in the second week of April, extending until mid-June. Join us in fostering not just soccer skills, but a lifetime of passion for the game. Plus, enjoy the unique experience of playing in the heart of nature at Prospect Park, Brooklyn—an iconic setting for your child's soccer adventures!
                </p>

            </div>


        </div>
        
        </div>

    </section>
  )
}

export default Location