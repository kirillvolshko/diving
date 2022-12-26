import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import ContactUs from './components/Modal/ContactUs'
import FormContent from "./components/FormContent/FormContent";
import Reviews from "./components/Reviews/Reviews";
import Bottom from "./components/Bottom/Bottom";
import CourseSystem from "./components/CourseSystem/CourseSystem";
import Content from "./components/Content/Content";
import Instructors from './components/Instructors/Instructors';
import Request from './components/Modal/Request';
function App() {

  
  const [IsCardShowed, SetIsCardShowed] = useState(false);
  const [SecondModal, SetSecondModal] = useState(false);
 console.log(IsCardShowed)
  return (
    <div className="App">
      <Request active={SecondModal} setActive={SetSecondModal}/>
      <ContactUs active={IsCardShowed} setActive={SetIsCardShowed}/>
      <Header setActive={SetIsCardShowed}/>
      <Content/>
       <CourseSystem/>
       <Instructors/>
       <FormContent setActive={SetSecondModal}/>
       <Reviews/>
       <Bottom/>

    </div>
  );
}

export default App;
