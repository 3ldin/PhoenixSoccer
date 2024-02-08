import React, { useRef, useState } from 'react';
import Navbar from '@/components/navbar';
import Footer from '../components/Footer';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tfjx1hl', 'template_c93iijh', form.current, '_J1njGKfQkgwAugnq')
      .then((result) => {
        console.log(result.text);
        setIsSubmitted(true); // Set the state to true after successful submission
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <div className='bg-sky-600'>
      <Navbar />

      <div className="container mx-auto flex flex-col items-center text-center pt-4 mt-28">

        <h1 className="text-6xl  font-bold text-white mt-6 drop-shadow-xl">Contact Us</h1>
        <div className="container mx-auto text-center mt-10 pb-4 bg-skt-600">

          <h2 className="text-3xl mb-8 pt-4 text-yellow-500 font-bold">Phoenix Soccer Club</h2>
          <p>NYC Based</p>
          <p>Email: info@phoenixsoccer.club </p>
          <p>Phone: (347) 722-4353</p>
          <p className="m-8">
            Just want to say hi? Or have a problem. We'd love to hear from you. We love our phoenix members and community!
          </p>

          <form ref={form} onSubmit={sendEmail} className="flex flex-col">
            <div className="mb-16 text-white block text-sm font-medium">
              <label className="mb-6">Name</label>
              <input type="text" name="user_name" className="bg-[#ffffff] border border-[#33353F] text-gray-100 text-sm rounded-lg block my-2 w-full p-2.5" required />
              <label>Email</label>
              <input type="email" name="user_email" className="bg-[#ffffff] border border-[#33353F] text-gray-100 text-sm rounded-lg my-2 block w-full p-2.5" required />
              <label>Message</label>
              <textarea name="message" className="bg-[#ffffff] border border-[#33353F] text-gray-100 text-sm rounded-lg block mt-2 w-full p-2.5" required />
              <button type="submit" className="bg-gray-950 ring-2 ring-yellow-500 hover:bg-gray-800 text-white font-bold mt-4 py-2.5 px-5 rounded-lg w-full">Send</button>
              {isSubmitted ? (
            <div className="text-green-500 text-xl mb-4">Message sent successfully! Thank you for reaching out.</div>
          ) : null}
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
