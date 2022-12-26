import React, { useEffect, useState } from "react";
import './Header.css'
import { menuItems } from "./MenuItems";
function Header({ setActive}) {
    const handleCLick =()=>{
        setActive(true)
      }
     
      return (
        <div className='header'>
            <div className='menu-header'>
              <div className='menu-img'>
                <img className='img-style' src ={'image/logo.png'}/>
              </div>
                
              <div className='menu'>
                  <ul className="menu-items">
                    {menuItems.map((menu, index) => {
                       return (
                        <li className="items-li" key={index}>
                          <a href={menu.url}>{menu.title}</a>
                        </li>
                        );
                    })}
                  </ul>
              </div>
              <div className='menu-button' >
                <button className='style-button' onClick={handleCLick}>Contact us</button>
              </div>
                
            </div>
            <div className='content-header'>
                <div className='text'>
                    
                    <p className='main-title'>Scuba Diving</p>
                    <p className='main-text'>We professionally teach diving in Kharkov. Don't waste time<br></br>
                       learning while you're on vacation. Complete a full diving course<br></br>
                       in Kharkiv and go on vacation already with a certificate</p>
                </div>
                <button className='content-button' >Learn more</button>
            </div>
              
        </div>
      )
}

export default Header;