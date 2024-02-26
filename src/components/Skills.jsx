import React from 'react'
import Testimonials from './Testimonials/Testimonials';

function Skills() {
  return (
    <div className='bg-[#2A2C39] h-[100vh] py-[4rem] px-[2rem] md:px-[8rem] lg:py-[10vh]' id="skills">
      <div className='text-gray-500 font-medium text-2xl'>|| My Skills</div>
      <div className='text-white mt-8 text-4xl font-semibold'>Skills And Tools</div>
      <div>
        <Testimonials />
      </div>
    </div>
  )
}

export default Skills;