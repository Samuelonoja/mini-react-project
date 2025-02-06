import React from 'react'
import logoImg from '../assets/flag_of_portugal.png'; 

function Navbar(props) {
  return (
    <>
    <div className='flex justify-center py-1 bg-blue-300 gap-2'>
    <img className='mt-2 h-[30px] w-[40px]' src={logoImg}/>
    {/* <div className='mt-2 h-[30px] w-[40px]'><img src={props.picture}/></div> */}
    <p className='text-white font-bold text-4xl'>{props.ProjectName}</p>
    </div>
    </>
  )
}

export default Navbar