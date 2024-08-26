import React from 'react'
import './Landingpage.css'
// import heroImage from '../../assets/netflix-brand-hero-image.jpg'
import Getstarted from '../../components/Getstarted'

function Landingpage() {
  return (
    < >
      <div className='image'>
        
         <div className=''>
         <h1 className=' hero-text '>Unlimited movies,TV  <br /> shows,and more</h1>
         <h5 className='text-light text-center my-4'>Starts at ₹149.  Cancel anytime.</h5>
         <Getstarted/>
         </div>
        
      </div>
    </>
  )
}

export default Landingpage