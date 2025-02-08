import React from 'react'
import logoImg from '../assets/flag_of_portugal.png'; 
import { Link } from 'react-router-dom';

function Navbar(props) {
  return (
    <>
    <div className='flex justify-around sticky top-0 h-20 py-1 bg-blue-300 gap-2'>
      <div className='flex gap-5 justify-center'>
      <img className=' mt-5 h-[30px] w-[40px]' src={logoImg}/>
    <p className=' mt-3 text-white font-bold text-4xl'>{props.ProjectName}</p>

    <button>Search something here...</button>

      </div>
    <div className='flex items-center'>
      <Link to='/addreceipe'>
      <button>Add Receipe</button>
      </Link>
    </div>
    </div>
    </>
  )
}

export default Navbar