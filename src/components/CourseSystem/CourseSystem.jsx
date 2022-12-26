import React from 'react'
import { CourseItems } from './CourseItems';
import './CourseSystem.css'
function CourseSystem() {
  return (
    <div className='course-system'>
        <div className='course-content'>
            <p className='course-title'>Course system</p>
            <p className='course-text'>After filling out application you will start an<br></br>
                 adventure through the world of scuba diving
            </p>
        </div>
        <div className='course-system-images'>
        {CourseItems.map((items, index) => {
                   return (
                    <div className='items' key={index}>
                        <div className='card'>
                            <img className='card-image' src ={`image/${items.image}.png`}/>
                            <p className='text-card'>{items.text}</p>
                        </div>
                        <img className='pointer-image' src ={`image/${items.pointer}.png`}/>
                    </div>
                    
                    );
                })}
        </div>
    </div>
  )
}

export default CourseSystem