import React, { useEffect } from 'react';
import Navbar from '@/components/navbar';
import Footer from '../components/Footer';
import Link from 'next/link';
import SawyerWidget from '../components/SawyerWidget';




const Procedure = () => {

  return (
    <div>
      
    <div className="mx-auto text-center ">
      <h1 className="mb-4  pt-14 text-6xl font-bold text-white drop-shadow-xl ">Procedures and Policies</h1>
      <section className="mt-6 p-4 items-center mx-auto">
        <h2 className="text-3xl font-bold my-4 text-yellow-500">Drop-in Policy</h2>
        <p className='text-xl'>
          Only authorized adults are allowed to sign children out of class if parents are not present.
          Photo ID is required upon sign out with a signature. Adults picking up children have to be 18 years or older.
        </p>
        <h2 className="text-3xl font-bold my-4 text-yellow-500">Gear</h2>
        <p className='text-xl'>
          Athletes are required to wear shoes, preferably soccer turf shoes. Children are also given a t-shirt provided by us,
          nonetheless, sports apparel is recommended. As activities will be outside, parents are asked to keep track of weather
          advisories for little rain or drizzle. Camps are conducted in those conditions, and appropriate clothing should be provided.
          SUNSCREEN is recommended! - If athletes have any additional requests, please speak with the coaches at hand.
        </p>
        <p className='text-xl'>
          Children's belongings should be marked. It is encouraged to keep items in a backpack or bag. Belongings are the responsibility of the athlete!
        </p>
        <h2 className="text-3xl font-bold my-4 text-yellow-500">Bathroom Procedure</h2>
        <p className='text-xl'>
          Athletes are escorted to the bathroom with coaches at all times. Coaches will inspect each location for safety and health measures.
          Athletes are also taken to bathrooms in groups!
        </p>
        <h2 className="text-3xl font-bold my-4 text-yellow-500">Illness and Injury</h2>
        <p className='text-xl'>
          In the event, the athlete becomes ill or sustains an injury, parents/guardians will be contacted to be picked up.
          If an athlete is injured, coaches will take the appropriate steps to provide first aid. In the event, we are not able to reach you,
          they will be taken to the hospital.
        </p>
        <p className='text-2xl'>
          ***COACHES ARE FIRST AID & CPR CERTIFIED***
        </p>
        <h2 className="text-3xl font-bold my-4 text-yellow-500">Cancellation Policy</h2>
        <p className='text-xl'>
          Cancellations made 48hrs or more before the start of the season will receive a full refund.
          Cancellations need to be made via email, at info@phoenixsoccer.club. All other cancellations are nonrefundable.
        </p>
        <h2 className='text-3xl font-bold my-4 text-yellow-500'>Location</h2>
        <img 
        src='/images/location.PNG'
        className='mx-auto'
        />
        <h2 className='text-3xl font-bold my-4 text-yellow-500 '>The Next Step</h2>
        <p className='text-xl'>Ready to enroll your child, and watch them grow into a talented soccer player?</p>
        <Link href='/Contact'>
            <button className='bg-sky-600 hover:bg-sky-700 text-white font-bold mt-4 py-2 px-4 rounded drop-shadow-lg'>Contact Us</button>
        </Link> 
      </section>
    </div>
    
    </div>
  );
};

export default Procedure;
