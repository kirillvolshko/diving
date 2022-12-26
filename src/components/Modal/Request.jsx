import React from 'react'
import './ContactUs.css'
const Request = ({active, setActive}) => {
  
  return (
    <div className={active ? "modal active" : "modal"} >
            <div className='modal-content' onClick={e=>e.stopPropagation()}>
                <img  className='request-img' src ={'image/logo.png'}/>
                <p className='modal-title'>Thank you for request</p>
                
                <div className='modal-text-content'>
                    <p className='request-text'>Our operator will connact<br></br>
                      you during the day.</p>
                    
                </div>
               <button className='modal-button' onClick={()=>setActive(false)}>Continue</button>
                
            </div>
    </div>
  )
}

export default Request