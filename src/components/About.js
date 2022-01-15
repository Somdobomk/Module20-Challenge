import React from 'react'
import ScrollIntoView from 'scroll-into-view'
import {FaChevronDown} from 'react-icons/fa'

function About() {
  return (
    <div className='max-w-4xl mt-20 mx-auto'>
      <p className='text-2xl text-black md:text-4xl font-bold text-center'>
        Hey 👋🏼
      </p>
      <p className='text-base sm:text-2xl text-center text-gray-600 leading-relaxed mt-4'>
        I'm a Frontend developer with a passion for creating beautiful and functional user interfaces.
      </p>

    <ScrollIntoView selector=''>
      <div className='mx-auto p-20'>
        <FaChevronDown className='animate-bounce mx-auto text-3xl text-blue-500' />
      </div>
    </ScrollIntoView>

    </div>

  )
}

export default About;