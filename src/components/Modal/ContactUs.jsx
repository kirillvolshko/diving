import React from 'react'
import './ContactUs.css'
import { headerItems } from './Items'
import { bottomItems } from './Items'
const ContactUs = ({active, setActive}) => {
    
    console.log()
  return (
    <div className={active ? "modal active" : "modal"} onClick={()=>setActive(false)}>
            <div className='modal-content' onClick={e=>e.stopPropagation()}>
                <p className='modal-title'>Waiting for your <br></br>
                     call and messege</p>
                <div className='header-modal'>
                {headerItems.map((items, index) => {
                       return (
                       
                          <img key={index} className="header-image" src ={`image/${items.image}.png`} />
                     
                        );
                    })}
                </div>
                <div className='modal-text-content'>
                    <p className='modal-text'>Phone:</p>
                    <p className='modal-untext'>+38 000 000 00 00</p>
                </div>
                <div className='modal-text-content'>
                    <p className='modal-text'>Email:</p>
                    <p className='modal-untext'>coolswim@gmail.com</p>
                </div>
                <div className='bottom-modal'>
                {bottomItems.map((items, index) => {
                       return (
                        
                          <img key={index} className="bottom-image" src ={`image/${items.image}.png`} />
                       
                        );
                    })}
                </div>
            </div>
    </div>
  )
}

export default ContactUs