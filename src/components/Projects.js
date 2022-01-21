import React from 'react';
import project1 from '../images/project1.jpg';
import project2 from '../images/project2.jpg';
import project3 from '../images/project3.jpg';
import project4 from '../images/project4.jpg';
import project5 from '../images/project5.jpg';
import project6 from '../images/project6.gif';

function Projects() {
  return (
      <div className='justify-center max-w-4xl py-12 mx-auto' id='projects'>
        <p className='pt-4 text-2xl font-bold text-center text-black sm:text-4xl'>
          Projects
        </p>
        <div className='flex flex-wrap justify-center pt-2'>
      <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
        <div className=''>
          <img className='w-32 mx-auto shadow-xl drop-shadow-sm' src={project1} alt='project1' />
        </div>
        <div className='mt-5 text-center'>
          <p className='text-xl font-semibold text-gray-900 sm:text-2xl'>
            <a href={'https://ourdoggos.com/'} target='_blank' rel='noopener noreferrer'>Ourdoggos</a>
          </p>
          <p className='inline-block w-auto px-5 pt-2 pb-4 text-xs text-gray-600 sm:text-base'>
          <a href={'/'} target='_blank' rel='noopener noreferrer'>Source</a>
          </p>
        </div>
      </div>

      <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
        <div className=''>
          <img className='w-32 mx-auto shadow-xl drop-shadow-sm' src={project2} alt='project2' />
        </div>
        <div className='mt-5 text-center'>
          <p className='text-xl font-semibold text-gray-900 sm:text-2xl'>
          <a href={'https://ddtcoffee.com'} target='_blank' rel='noopener noreferrer'>DDT Coffee</a>
          </p>
          <p className='inline-block w-auto px-5 pt-2 pb-4 text-xs text-gray-600 sm:text-base'>
          <a href={'/'} target='_blank' rel='noopener noreferrer'>Source</a>
          </p>
        </div>
      </div>

      <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
        <div className=''>
          <img className='w-32 mx-auto shadow-xl drop-shadow-sm' src={project3} alt='project3' />
        </div>
        <div className='mt-5 text-center'>
          <p className='text-xl font-semibold text-gray-900 sm:text-2xl'>
          <a href={'https://safetycomplianceandtraining.com'} target='_blank' rel='noopener noreferrer'>SCT</a>
          </p>
          <p className='inline-block w-auto px-5 pt-2 pb-4 text-xs text-gray-600 sm:text-base'>
          <a href={'/'} target='_blank' rel='noopener noreferrer'>Source</a>
          </p>
        </div>
      </div>

      <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
        <div className=''>
          <img className='w-32 mx-auto shadow-xl drop-shadow-sm' src={project4} alt='project4' />
        </div>
        <div className='mt-5 text-center'>
          <p className='text-xl font-semibold text-gray-900 sm:text-2xl'>
          <a href={'https://dogecoin-ticker.netlify.app'} target='_blank' rel='noopener noreferrer'>Dogecoin Ticker</a>
          </p>
          <p className='inline-block w-auto px-5 pt-2 pb-4 text-xs text-gray-600 sm:text-base'>
          <a href={'https://github.com/Somdobomk/Dogecoin-Ticker'} target='_blank' rel='noopener noreferrer'>Source</a>
          </p>
        </div>
      </div>

      <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
        <div className=''>
          <img className='w-32 mx-auto shadow-xl drop-shadow-sm' src={project5} alt='project5' />
        </div>
        <div className='mt-5 text-center'>
          <p className='text-xl font-semibold text-gray-900 sm:text-2xl'>
          <a href={'https://github.com/Somdobomk/Dogecoin-Ticker'} target='_blank' rel='noopener noreferrer'>Portfolio V1</a>
          </p>
          <p className='inline-block w-auto px-5 pt-2 pb-4 text-xs text-gray-600 sm:text-base'>
          <a href={'/'} target='_blank' rel='noopener noreferrer'>Source</a>
          </p>
        </div>
      </div>

      <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
        <div className=''>
          <img className='w-32 mx-auto shadow-xl drop-shadow-sm' src={project6} alt='project5' />
        </div>
        <div className='mt-5 text-center'>
          <p className='text-xl font-semibold text-gray-900 sm:text-2xl'>
          <a href={'https://somdobomk-module20-challenge.netlify.app/'} target='_blank' rel='noopener noreferrer'>ECommerce Store</a>
          </p>
          <p className='inline-block w-auto px-5 pt-2 pb-4 text-xs text-gray-600 sm:text-base'>
          <a href={'https://github.com/Somdobomk/burkholder-eyelashes'} target='_blank' rel='noopener noreferrer'>Source</a>
          </p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Projects;