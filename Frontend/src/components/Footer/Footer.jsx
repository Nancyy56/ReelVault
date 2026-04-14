import React from 'react'

const Footer = () => {
  return (
    <div className=' py-5 text-white flex flex-col justify-center text-center items-center'>
      
      <img src="/img/logo.png" alt="" width="200px" />
      <nav>
        <ul className='flex gap-7'>
          <li><a href="/">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="https://www.linkedin.com/in/nancyy56">Contact</a></li>
        </ul>
      </nav>
      <div>
        Built by <a href="https://www.linkedin.com/in/nancyy56" className='hover:underline'>Nancy Yadav</a> 🚀
      </div>
      </div>
  )
}

export default Footer