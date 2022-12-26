import React from 'react'
import { ReviewsItems } from './ReviewsItems'
import './Reviews.css'
function Reviews() {
  return (
    <div className='reviews'>
        <div className='title-reviews'>
            <p className='title-reviews'>Reviews</p>
        </div>
        <div>
                {ReviewsItems.map((items, index) => {
                   return (
                    <div className='reviews-item' key={index}>
                        <div className='cards'>
                            <img className='cards-image' src ={`image/${items.image}.png`}/>
                            <p className='tittle-cards'>{items.name}</p>
                            <p className='text-cards'>I like this diving school I really learned<br></br> 
                             new things and now I dive very well,<br></br>
                              besides I have a certificate with<br></br>
                             which I was even able to find a part<br></br>
                                     time job as a diver</p>
                        </div>
                        
                    </div>
                    
                    );
                })}
        </div>
    </div>
  )
}

export default Reviews