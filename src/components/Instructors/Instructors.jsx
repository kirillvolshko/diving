import React from 'react'
import { InstructorsItems } from './InstructorsItems';
import './Instructors.css'
function Instructors() {
  return (
    <div className='instructors'>
        <div className='instructors-content'>
            <p className='instructors-title'>Instructors</p>
            <p className='instructors-text'>that will accompany you throughout the course will<br></br>
               become not only reliable mentors but also friends</p>
        </div>
       
                {InstructorsItems.map((items, index) => {
                   return (
                    <div className='inctructors-items' key={index}>
                        <div className='images'>
                            <img className='instructors-image' src ={`image/${items.image}.png`}/>
                            <p className='secondname'>{items.titel}</p>
                            <p className='instructors-texts'>We have alredy trained more<br></br> than 2500 students.</p>
                        </div>
                    </div>
                    
                    );
                })}
        
    </div>
  )
}

export default Instructors