import React from 'react'
import RightContent from './RightContent'
import {useNavigate} from "react-router-dom";

const LeftContent = () => {
  const navigate=useNavigate();
  return (
    <div className=' parent bg-green-40 flex flex-wrap h-90 ml-10 w-full mt-5 '>

      <div className=' bg-blue- w-110 flex flex-wrap h-90'>
         <h1 className='py-5 text-10 text-5xl font-bold font-sans leading-12'>Easy, reliable way <span>to take care of your </span><span className='text-blue-500'>home</span></h1>
      <h1 className='font-sans font-3xl'>we provide you with the best people to help take care of your home</h1>
      <br></br>

      <button onClick={()=>navigate("/services")}
        
       className=' active:scale-95 ml-4 bg-blue-400 border rounded-3xl border color-blue-500 h-10 border-blue-300'><span className='px-5 text-white font-sans cursor-pointer'>explore now</span></button>
      <h1 className='px-10 mt-2 text-blue-800 text-m font-sans cursor-pointer'>learn more</h1>
      </div>

       <RightContent/>

      </div>
    
    
  )
}

export default LeftContent
