import React from 'react'
import Navbar from '../components/Navbar'
import Card from './Card'
import Bucket from '../assets/bucket.png'
import Construction from '../assets/construction.png'
import Electrician from '../assets/electrician.png'
import Teacher from '../assets/teacher.png'
import Doctor from '../assets/doctor.png'
import Service from '../assets/service.png'
import Paint from '../assets/paint.png'
import Packers from '../assets/packers.png'
import Button from './Button'
import Footer from './Footer1'

const Services = () => {
  return (
    <div>
      <Navbar/>
      <h1 className='py-5 text-center font-sans  text-blue-400 '>our services</h1>
      <h1 className='py-0 text-center font-sans  text-3xl '>professional  services for your home</h1>
      

      

      <div className='parent bg-green-20 w-full h-100 mt-2 ml-15 flex flex-wrap '>
         <Card
         title="Home cleaning"
           description="professional cleaning services for your spotless home. "
          image ={Bucket}
          
          />
         <Card
         title="electrical"
         description="safe and reliable electrical solution  your home."
         image ={Electrician}
         />
         <Card
         title="plumbing"
         description="from leak repair to installation all solution exist."
         image ={Construction}
         />

          <Card
          title="Doctor"
          description="best and experience doctor are available here."
          image={Doctor}
          />

         <Card
         title="AC repair"
         description="we provide the best AC services near you and installation."
         image={Service}
         />

         <Card
         title="painting"
         description="interior and exterior painting with perfect finish."
         image={Paint}
         />

         <Card
         title="home tutor"
         description="we provide the best tutor for your child ."
         image ={Teacher}
         />


         <Card
         title="packers and movers"
         description=""
         image={Packers}
         />
</div>
   

<Button/>
<Footer/>
 
 
     </div>
  )
}

export default Services
