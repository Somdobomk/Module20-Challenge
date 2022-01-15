import React from 'react';
import {SiJavascript, SiTailwindcss, SiArchlinux} from 'react-icons/si';
import {FaReact} from 'react-icons/fa';
import {FiFigma} from 'react-icons/fi';

function Skills() {
  return (
    <div className='max-w-4xl mx-auto justify-center py-12' id='tech'>
      <p className='text-2xl text-black text-center sm:text-4xl pt-4 font-bold'>
        Tech I Use
      </p>
      <div className='flex flex-wrap justify-center pt-2'>
        <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
          <SiJavascript color='#FFDF00' className='mx-auto text-2xl sm:text-4xl' />
          <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'>
            Javascript
          </p>
        </div>
        <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
          <FaReact color='#61DAFB' className='mx-auto text-2xl sm:text-4xl' />
          <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'>
            React
          </p>
        </div>
        <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
          <SiTailwindcss color='#00C0A3' className='mx-auto text-2xl sm:text-4xl' />
          <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'>
            TailwindCSS
          </p>
        </div>
        <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
          <FiFigma color='orange' className='mx-auto text-2xl sm:text-4xl' />
          <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'>
            Figma
          </p>
        </div>
        <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
          <SiArchlinux color='#61DAFB' className='mx-auto text-2xl sm:text-4xl' />
          <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'>
            Archlinux
          </p>
        </div>
      </div>
    </div>
  )
}

export default Skills;