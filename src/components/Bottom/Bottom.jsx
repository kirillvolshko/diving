import React from 'react'
import './Bottom.css'
import { SiteMap } from './BottomItems';
import { Support } from './BottomItems';
import { FollowUs } from './BottomItems';
import { Icon } from './BottomItems';
function Bottom() {
  return (
    <div className='bottom'>
         <div>
            <img className='logo-bottom' src ={'./image/logo.png'}/>
         </div>
         <div className='bottom-elements'>
            <div>
             <ul className="site-map">
                {SiteMap.map((sitemap, index) => {
                   return (
                    <li className="bottom-items" key={index}>
                      <a className='bottom-title'>{sitemap.title}</a>
                      <a className='bottom-item' href={sitemap.url}>{sitemap.item}</a>
                    </li>
                    );
                })}
             </ul>
            </div>
            <div>
             <ul className="support">
                {Support.map((sitemap, index) => {
                   return (
                    <li className="bottom-items" key={index}>
                      <a className='bottom-title'>{sitemap.title}</a>
                      <a className='bottom-item' href={sitemap.url}>{sitemap.item}</a>
                    </li>
                    );
                })}
             </ul>
            </div>
            <div>
             <ul className="followus">{FollowUs.title}
             
                {FollowUs.map((followus, index) => {
                   return (
                    <li className="bottom-items" key={index}> 
                      <a className='bottom-title'>{followus.title}</a>
                      <a className='followus-item'>{followus.item}</a>
                      <a className='followus-item'>{followus.email}</a>
                      <a className='followus-item'>{followus.tel}</a>
                    </li>
                    );
                })}
                {Icon.map((icon, index) => {
                            return (
                                <div className='bottom-icons'>
                                <li className="bottom-items" key={index}>
                                    <img className="bottom-icon"src ={`image/${icon.image}.png`}/>
                                </li>
                                </div>
                            );
                    })}
             </ul>
            </div>
         </div>
    </div>
  )
}

export default Bottom