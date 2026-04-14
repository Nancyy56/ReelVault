import React from 'react'

const Header = () => {
  return (
    <div className='bg-[var(--red)] flex justify-center items-center px-10 shadow-2xl'>
        <h1 className='text-white text-3xl font-bold tracking-wide py-2'>ReelVault</h1>
        <p className='hidden'>Menu</p>
    </div>
  )
}

export default Header