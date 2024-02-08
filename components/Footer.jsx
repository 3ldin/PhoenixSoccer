import React from 'react';


const Footer = () => {
  return (
    <footer className="bg-white text-black py-12 w-screen text-center border-t-4 border-black">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="md:w-1/4 mb-6 md:mb-0">
          <h3 className="text-xl font-semibold mb-4">Phoenix Soccer Club</h3>
          <p>NYC Based</p>
          <p>Email: info@phoenixsoccer.club </p>
          <p>Phone: (347) 722-4353</p>
        </div>
        <div className='md:w-1/4 mb-6 md:mb-0 mx-auto'>
          <img 
          src='/images/phoenix4.png'
          width={345}
          />
        </div>
        <div className="md:w-1/4 mb-6 md:mb-0">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul>
            <li>
              <a href="/" className="hover:text-gray-500 transition duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="/About" className="hover:text-gray-500 transition duration-300">
                About
              </a>
            </li>
            <li>
              <a href="/Programs" className="hover:text-gray-500 transition duration-300">
                Programs
              </a>
            </li>
            <li>
              <a href="/Contact" className="hover:text-gray-500 transition duration-300">
                Contact
              </a>
            </li>
          </ul>
        </div>
        

      </div>
      <div className="text-center mt-8">
        <p>&copy; 2020 Phoenix Soccer Club. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
