import React, { useEffect, useState } from 'react'
import './About.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Typewriter from 'typewriter-effect';

function About() {

  return (
    <div className='overflow-hidden' id="about" style={{ width: "100%", backgroundColor: '#252734', paddingTop: '12vh', minHeight: '100vh'}}>
        <div className='md:flex h-full items-center justify-between'>
            <div className='text-center md:text-left p-[1rem] w-full md:p-[2rem] lg:p-[8rem] pt-0 md:w-1/2 self-center'>
                <div 
                className='
                text-[24px] 
                md:text-[32px] 
                text-white
                font-medium
                my-[6px]
                md:my-[12px]
                '
                style={{ 
                    fontFamily: 'NanumGothic', 
                    }}
                    >Hello! I'm</div>
                <div 
                className='
                text-[48px]
                md:text-[72px]
                font-medium
                text-[#4BFFA5]
                my-[12px]
                '
                style={{ 
                    fontFamily: 'NanumGothic', 
                    }}>Sanyam Rana</div>
                <div 
                className='
                text-[24px] 
                md:text-[32px] 
                text-white
                font-medium
                my-[6px]
                md:my-[12px]
                '
                style={{ 
                    fontFamily: 'NanumGothic', 
                    }}>Fullstack Developer based in India.</div>
                 <div className='text-[24px] md:text-[40px] text-white mt-8'>
                 <Typewriter 
                options={{
                    autoStart: true,
                    loop: true
                }}
                 onInit={(typewriter) => {
                    typewriter.typeString('I code cool <span style="color: #4BFFA5;"><strong>websites.</strong></span>')
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString('I develop mobile <span style="color: #4BFFA5;"><strong>apps.</strong></span>')
                    .pauseFor(2500)
                    .deleteAll()
                    .start();
                 }}
                />
                 </div>
            </div>
            <div className='w-full flex justify-end md:w-1/2 mt-8'>
                <div className='absolute bottom-0 sm:relative md:rounded-full overflow-hidden'>
                    <img src='/images/profile.png' className='block w-full' alt='Profile Image' />
                </div>
            </div>
        </div>
        {/* <div className='container'>
        <div className='frame'>
          <div className='circle-inner'>
          <div className='icon'><GitHubIcon /></div>
            <div className='circle-outer'>
            </div>
          </div>
        </div>
        <div className='frame2'>
          <div className='circle-inner'>
          <div className='icon'><LinkedInIcon /></div>
            <div className='circle-outer'>
            </div>
          </div>
        </div>
        <div className='circle'>

        </div> 
        </div> */}
    </div>
  )
}

export default About;