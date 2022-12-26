import React from 'react'
import './FormContent.css'
const FormContent =({setActive})=> {
  const handleCLick =()=>{
    setActive(true)
  }
  return (
    <div className='form-content'>
      <div className='content-form'>
         <div className='text-form'>
                <p className='form-title'>Get even closer to <br></br> your dream</p>
                <p className='main-text'>If you really want to learn how to dive cool with scuba<br></br>
                 diving, but are still afraid to trust and start learning, this<br></br>
                 offer is especially for you. Sign up for a free trial lesson<br></br>
                 with one of our trainers and test your strength. Fill out<br></br>
                 the form and we will contact you on the same day</p>
         </div>
        <div className='form'>
          <div>
                <p className='title-in-form'>Leave a request<br></br>for a trial dive</p>
                <p className='text-input'>Name and Surname</p>
                <input
                  className='MyInput'
                  placeholder="N&S"
                 />
                <p className='text-input'>Email</p>
                <input
                  className='MyInput'
                  placeholder="@"
                />
                <p className='text-input'>Phone</p>
                <input
                  className='MyInput'
                  placeholder="+38 000 000 00 00"
                />
                <button className='MyBut' onClick={handleCLick}>Sign up</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormContent