import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    
    <div >
      <div className='card shadow-md flex justify-content gap-20 w-full '>
        <h1 className=' px-5 py-3 font-sans'>serve</h1>
      <div className=' parent-2   flex justify-between gap-3 ml-65'>
        <Link to='/Home'>
      <h1 className='test-5xl ps-60transition duration-500 hover:bg-blue-350 font-sans py-3 cursor-pointer'>home</h1>
      </Link>

      <Link to='/Services'>
      <h1 className='ps-4 py-3 ps-5 transition duration-500 hover:bg-blue-300 font-sans cursor-pointer'>services</h1>
      <hr className='-mt-3 ml-5 border-blue-500  border-1 rounded-2xl'></hr>
      </Link>
    
      <h1 className='ps-5 py-3 transition duration-500 font-sans'>companies</h1>
      </div>
      <button className=  'mt-2 py-2 text-blue-400  ml-70  flex ms-10 px-5 py-2 border rounded-3xl  py-2 cursor-pointer active:scale-95 h-11 py-2 mb-2  border-blue-400 font-sans'>login</button>
      
    </div>
</div>
  )
}
   
export default Navbar
