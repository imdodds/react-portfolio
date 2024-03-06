import React from 'react'

const Footer = () => {
  return (
    <div className='p-5 text-center'>
      { /* Social Icons */}
      <p className='text-sm mt-2 opacity-50'>
        &copy; {new Date().getFullYear()} Ian Mitchell Dodds. All rights reserved.
      </p>
    </div>
  )
}

export default Footer
