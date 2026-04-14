import React from 'react'

const Header = () => {
  return (
    <div className='bg-[var(--red)] flex justify-center items-center px-10 shadow-2xl'>
        <img src="/img/logo.png" alt="Logo" 
        className='w-[100px]'
        />
        <p className='hidden'>Menu</p>
    </div>
  )
}

export default Header