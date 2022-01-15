import React from 'react';
import project1 from '../images/project1.jpg';
import project2 from '../images/project2.jpg';
import project3 from '../images/project3.jpg';
import project4 from '../images/project4.jpg';
import project5 from '../images/project5.jpg';

function Projects() {
  return (
      <div className='max-w-4xl mx-auto justify-center py-12' id='projects'>
        <p className='text-2xl text-black text-center sm:text-4xl pt-4 font-bold'>
          Projects
        </p>
        <div className='flex flex-wrap justify-center pt-2'>
      <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
        <div className=''>
          <img className='w-32 mx-auto shadow-xl drop-shadow-sm' src={project1} alt='project1' />
        </div>
        <div className='text-center mt-5'>
          <p className='text-xl sm:text-2xl text-gray-900 font-semibold'>
            <a href={'https://ourdoggos.com/'} target='_blank' rel='noopener noreferrer'>Ourdoggos</a>
          </p>
          <p className='text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block'>
          <a href={'/'} target='_blank' rel='noopener noreferrer'>Source</a>
          </p>
        </div>
      </div>

      <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
        <div className=''>
          <img className='w-32 mx-auto shadow-xl drop-shadow-sm' src={project2} alt='project2' />
        </div>
        <div className='text-center mt-5'>
          <p className='text-xl sm:text-2xl text-gray-900 font-semibold'>
          <a href={'https://ddtcoffee.com'} target='_blank' rel='noopener noreferrer'>DDT Coffee</a>
          </p>
          <p className='text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block'>
          <a href={'/'} target='_blank' rel='noopener noreferrer'>Source</a>
          </p>
        </div>
      </div>

      <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
        <div className=''>
          <img className='w-32 mx-auto shadow-xl drop-shadow-sm' src={project3} alt='project3' />
        </div>
        <div className='text-center mt-5'>
          <p className='text-xl sm:text-2xl text-gray-900 font-semibold'>
          <a href={'https://safetycomplianceandtraining.com'} target='_blank' rel='noopener noreferrer'>SCT</a>
          </p>
          <p className='text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block'>
          <a href={'/'} target='_blank' rel='noopener noreferrer'>Source</a>
          </p>
        </div>
      </div>

      <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
        <div className=''>
          <img className='w-32 mx-auto shadow-xl drop-shadow-sm' src={project4} alt='project4' />
        </div>
        <div className='text-center mt-5'>
          <p className='text-xl sm:text-2xl text-gray-900 font-semibold'>
          <a href={'https://dogecoin-ticker.netlify.app'} target='_blank' rel='noopener noreferrer'>Dogecoin Ticker</a>
          </p>
          <p className='text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block'>
          <a href={'https://github.com/Somdobomk/Dogecoin-Ticker'} target='_blank' rel='noopener noreferrer'>Source</a>
          </p>
        </div>
      </div>

      <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
        <div className=''>
          <img className='w-32 mx-auto shadow-xl drop-shadow-sm' src={project5} alt='project5' />
        </div>
        <div className='text-center mt-5'>
          <p className='text-xl sm:text-2xl text-gray-900 font-semibold'>
          <a href={'https://github.com/Somdobomk/Dogecoin-Ticker'} target='_blank' rel='noopener noreferrer'>Portfolio V1</a>
          </p>
          <p className='text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block'>
          <a href={'/'} target='_blank' rel='noopener noreferrer'>Source</a>
          </p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Projects;