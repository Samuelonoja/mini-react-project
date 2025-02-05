import React from 'react'
import logoImg from '../assets/flag_of_portugal.png'; 

function Navbar() {
  return (
    <>
    <div className='flex justify-center py-1 bg-blue-300 gap-2'>
    <img className='mt-2 h-[30px] w-[40px]' src={logoImg}/>
    <p className='text-white font-bold text-4xl'>Project Name</p>
    </div>
    </>
  )
}

export default Navbar