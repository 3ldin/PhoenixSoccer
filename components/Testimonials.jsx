import Link from 'next/link';
import React from 'react';
import { FaStar } from "react-icons/fa";


const Testimonials = ({ testimonials }) => {
  return (
    <section className="py-16 bg-yellow-400 w-screen">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-sky-600 drop-shadow-lg">What Parents Say</h2>
      </div>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
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
      </div>

      <div className="container mx-auto text-center mt-8">
        <p className="text-gray-700 text-lg mx-2">
          Join us and be part of the positive experiences our soccer camp offers. Sign up today to give your child a memorable and enriching soccer journey!
        </p>
        <Link href='https://www.hisawyer.com/phoenix-soccer-club/schedules'>
              <button className=" mt-6 bg-red-500 ring-2 ring-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded drop-shadow-lg">
                Register
              </button>
        </Link>
      </div>
    </section>
  );
};

export default Testimonials;
