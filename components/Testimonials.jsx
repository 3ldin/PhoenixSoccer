import React from 'react';
import { FaStar } from "react-icons/fa";
import Link from 'next/link';

const Testimonials = ({ testimonials }) => {
  return (
    <section className="bg-gradient-to-b from-sky-600 to-yellow-400 py-16 w-screen">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-yellow-500 drop-shadow-lg">What Parents Say</h2>
      </div>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <blockquote className="text-black mb-4">{testimonial.quote}</blockquote>
            <p className="font-bold text-black">- {testimonial.author}</p>
            <div className="flex mt-2">
              {[...Array(5)].map((_, starIndex) => (
                <FaStar key={starIndex} className="text-yellow-500" />
              ))}
            </div>
          </div>
        ))}

        {/* Additional testimonial without star rating */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <blockquote className="text-black mb-4">I want to echo this recommendation for Phoenix Soccer. My 4 year old attends on Saturdays and LOVES it. They do a mix of drills and playing the game. The coaches Emir and Miguel are excellent and have a special thing going with the kids. I highly encourage drop ins or signing up for a season.
</blockquote>
          <p className="font-bold text-black">Find more reviews here: <a className="underline text-sky-600 font-bold" href="https://www.parkslopeparents.com/reviews/phoenix-soccer-club">Park Slope Parents</a></p>
        </div>
      </div>

      <div className="container mx-auto text-center mt-8">
        <p className="text-black font-bold text-lg mx-2">
          Join us and be part of the positive experiences our soccer camp offers. Sign up today to give your child a memorable and enriching soccer journey!
        </p>
        <Link href='https://www.hisawyer.com/phoenix-soccer-club/auth/log-in'>
          <button className="mt-6 bg-red-500 ring-2 ring-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded drop-shadow-lg">
            Register
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Testimonials;
