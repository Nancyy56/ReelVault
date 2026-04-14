import React from 'react'

const Footer = () => {
  return (
    <div className=' py-5 text-white flex flex-col justify-center text-center items-center'>

      <h2 className='text-5xl font-bold tracking-wide mb-4'>ReelVault</h2>
      <nav>
        <ul className='flex gap-7'>
          <li><a href="/">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="tel:+918168750597">Contact</a></li>
        </ul>
      </nav>
      <div className='mt-2'>
        Contact: <a href="tel:+918168750597" className='hover:underline'>+91 8168750597</a>
      </div>
      <div>
        Built by <a href="https://www.linkedin.com/in/nancyy56" target="_blank" rel="noreferrer" className='hover:underline'>Nancy</a> 🚀
      </div>
      </div>
  )
}

export default Footer