import React from 'react'
import LangButton from './LangButton'

function Footer() {
  return (
    <>
      <div className="row" style={{color:'white'}}>
      <div className="col-md-1"></div>
      <div className="col-md-10">
        <div style={{color:'rgb(179,179,179)'}}>Questions? Call <span className='text-decoration-underline'>000-800-919-1694</span> </div>
        <div className="row mt-3">
          <div className="col-md-3">
            <div className='mt-3 text-decoration-underline' style={{color:'rgb(179,179,179)'}}>
              <p>FAQ</p>
              <p>Investor Relations</p>
              <p>Privacy</p>
              <p>Speed Test</p>
            </div>
          </div>
          <div className="col-md-3">
          <div className='mt-3 text-decoration-underline' style={{color:'rgb(179,179,179)'}}>
              <p>Help Centre</p>
              <p>Jobs</p>
              <p>Cookie Preference</p>
              <p>Legal Notices</p>
            </div>
          </div>
          <div className="col-md-3">
          <div className='mt-3 text-decoration-underline' style={{color:'rgb(179,179,179)'}}>
              <p>Account</p>
              <p>Ways to Watch</p>
              <p>Corporate Information</p>
              <p>Only on Netflix</p>
            </div>
          </div>
          <div className="col-md-3">
          <div className='mt-3 text-decoration-underline' style={{color:'rgb(179,179,179)'}}>
              <p>Media Centre</p>
              <p>Terms of Use</p>
              <p>Contact</p>
            </div>
          </div>
        
          
        </div>

        <div>
        
        <LangButton/>
        </div>

        <p style={{color:'rgb(179,179,179)'}} className='my-5'>Netflix India</p>
      </div>
      <div className="col-md-1"></div>
      </div>
    
    
    </>
  )
}

export default Footer