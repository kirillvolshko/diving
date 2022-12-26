import React from 'react'
import './Content.css'
import {ContentPicture} from './ContentPicture.js'
function Content1() {
  return (
    <div className='content'>
        <div className='content-text'>
            <p className='content-title'>Why people choose us?</p>
            <p className='text'>We have more than 10 years of experience in diving<br></br>
               training, our instructors have made more than 2000 dives<br></br>
               and worked at the most expensive resorts in the world</p>
        </div>
        <div className='content-picture'>
                {ContentPicture.map((picture, index) => {
                   return (
                    <div className={picture.style} key={index}>
                      <img className='content-image' src ={`image/${picture.image}.png`}/>
                      <p className='text-image'>{picture.text}</p>
                    </div>
                    );
                })}
        </div>
    </div>
  )
}

export default Content1