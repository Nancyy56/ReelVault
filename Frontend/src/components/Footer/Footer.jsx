import React from 'react'

const Footer = () => {
  return (
    <div className=' py-5 text-white flex flex-col justify-center text-center items-center'>
      
      <img src="/img/logo.png" alt="" width="200px" />
      <nav>
        <ul className='flex gap-7'>
          <li><a href="/">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="https://www.linkedin.com/in/ashishbmishra/">Contact</a></li>
        </ul>
      </nav>
      <div>
        Made with love by <a href="https://www.linkedin.com/in/ashishbmishra/" className='hover:underline'>@AshishMishra</a> ❤️
      </div>
      </div>
  )
}

export default Footer