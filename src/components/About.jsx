import React from 'react'

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";


const About = () => {
  return (
    <div className='flex items-center justify-center flex-col text-center pt-20 pb-6'>
      <h1 className='text-4xl md:text-7xl mb-1 md:mb-3 font-bold'>
        Ian Mitchell Dodds
      </h1>
      <p className='text-base md:text-xl mb-3 font-medium'>
        Full Stack Developer
      </p>
      <p className='text-sm max-w-xl mb-6'>
        Bio goes here...
      </p>
      <div className='flex flex-row p-2 text-center'>

        <a className='hover:text-stone-400' href='https://github.com/imdodds'>
          <FaGithub className='inline-block mx-1 mb-2' size={24} />
          <p className='text-xs mx-2'>
            Github
          </p>
        </a>
        <a className='hover:text-stone-400' href='https://www.linkedin.com/in/ian-dodds/'>
          <FaLinkedin className='inline-block mx-1 mb-2' size={24} />
          <p className='text-xs mx-2'>
            LinkedIn
          </p>
        </a>
        <a className='hover:text-stone-400' href='https://resume.creddle.io/resume/j49g9z35g33'>
          <FaFileAlt className='inline-block mx-1 mb-2' size={24} />
          <p className='text-xs mx-2'>
            Resume
          </p>
        </a>
      </div>
    </div>
  )
}

export default About
