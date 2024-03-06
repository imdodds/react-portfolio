import React from 'react'

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='p-5 text-center'>

      <a href='https://github.com/imdodds'>
        <FaGithub className='inline-block mx-3 mb-4 hover:text-stone-400' size={36} />
      </a>
      <a href='https://www.linkedin.com/in/ian-dodds/'>
        <FaLinkedin className='inline-block mx-3 mb-4 hover:text-stone-400' size={36} />
      </a>
      <p className='text-sm mt-2 opacity-50'>
        &copy; {new Date().getFullYear()} Ian Mitchell Dodds. All rights reserved.
      </p>
    </div>
  )
}

export default Footer
