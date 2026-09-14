import React from 'react'
import { useState } from 'react';
const Button = () => {
  const[showModal,setshowModal]=useState(false)
  
  return (
    <div>
      <button onClick={()=>setshowModal(true)}
       className='cursor-pointer active:scale-95 w-30 border rounded-3xl h-10 bg-black ml-160 text-white'>Book now</button>
    {showModal && (
      <div className="parent">
        <div >
          <div/>

            <button 
              onClick={() => setshowModal(false)}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  )
}

export default Button;
