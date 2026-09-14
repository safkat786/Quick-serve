import React from 'react'
import Footer from './Footer1'
import { useState } from 'react'

const Card=({title,description,image,button}) => {
  const[showModal, setShowModal]=useState(false);

  return (
    <div className=' '> 
  <div className='ml-4 mt-4 h-40 w-75 flex flex-wrap border rounded-2xl border-gray-200 shadow-md '>
        <h1 className=' font-bold g ps-40 text-sans'>{title}</h1>
        <p className='ps-40 '>{description}</p>
      
          <img
        className='h-20  bg-blue-100 flex  w-20 mb-10 bg-blue-20 -mt-20 ml-5 border rounded-full border-none  '   
         src={image}>
      </img>
       <button onClick={()=>setShowModal(true)}>
        <p className='ps-15 text-blue-400 cursor-pointer'>view details</p>
        </button> 
        {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">

          {/* Modal Box */}
          <div className=" bg-white w-90 h-90 p-6 rounded-xl shadow-xl">

            <h2 className="text-2xl font-bold mb-3">
              About Our Services
            </h2>
            <hr className=' py-2  border-blue-400'></hr>

            <p className="text-gray-600">
              We provide professional electrician, plumber,
              carpenter, teacher and many other home services.
            </p>
             <p className="text-gray-600">
              We provide professional electrician, plumber,
              carpenter, teacher and many other home services.
            </p>
           
           
            <div className="flex justify-end mt-6"></div>
            
            <button className='cursor-pointer active:scale-95  mt-1 px-5 py-3 bg-black text-white border  rounded-full'
             onClick={()=>setShowModal(false)}>close</button>
      
</div>

 </div> 
        )}
        </div>
        
        </div>
  
  
    
    
  )      
}

export default Card
