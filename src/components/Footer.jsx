import React from 'react'

const Footer = () => {
  return (
   <div className=' parent flex flex-wrap bg-red-40 h-75 mt-2 ml'>
        <div className=' w-400  flex flex-wrap bg-gray-900 ml-10 mr-10 mt-10 border color-gray-500 justify-content gap-20 border-black rounded-t-4xl'>


         <div className='services w-40 bg-red-30  '>
          <h1 className='text-white ps-8 py-8 font-sans text-3xl'>services</h1>
          <p className='text-white ps-8'>
           we offer
          </p>
          </div>

          <div className='home cleaning w-60  ml-4  '>
          <h1 className='text-white ps-2 py-8 font-sans text-3xl'>Home cleaning</h1>
          <p className='text-white ps-8'>
          
          </p>
          </div>

           <div className='Electricals w-40 bg-red-30 ml-4 '>
          <h1 className='text-white ps-2 py-8 font-sans text-3xl'>Electricals</h1>
          <p className='text-white ps-8'>
           we offer
          </p>
          </div>

         <div className='tutor w-40 bg-red-30 ml-10'>
          <h1 className='text-white ps-12 py-8 font-sans text-3xl'>Tutor</h1>
          <p className-white ='ps-8'>
           we offer
          </p>
          </div>

          <div className=' w-px  tutor w-40 bg-red-30 ml-10'>
          <h1 className='text-white ps-12 py-8 font-sans text-3xl'>contact us</h1>
          <p className-white ='ps-8'>
           we offer
          </p>
          </div>





        </div>
        </div>
  )
}

export default Footer
