import React from 'react';
import {FaGithubSquare, FaLinkedin, FaEnvelope} from 'react-icons/fa';


function Footer() {
  return (
    <div className='py-5 border-t-3/2'>
      <div className = 'flex align-center justify-center mt-4'>
      <a className='text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300' href="https://github.com/Somdobomk">
          <FaGithubSquare />
          <span className='sr-only'>Github</span>
        </a>

        <a className='text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300' href="https://www.linkedin.com/in/davidzapicojr/">
          <FaLinkedin />
          <span className='sr-only'>LinkedIn</span>
        </a>

        <a className='text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300' href="mailto:somdobomk@gmail.com">
          <FaEnvelope />
          <span className='sr-only'>Email</span>
        </a>
      </div>
      <div className='flex justify-center mt-4'>
        <p className='text-black mb-4'>
          Made with <span className='mr-2 text-red-500' role='link' aria-label='heart'>❤</span><a className='text-blue-500 hover:underline' href='mailto:somdobomk@gmail.com'>by David Zapico</a>
        </p>
      </div>
    </div>
  )
}

export default Footer;