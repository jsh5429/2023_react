import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../css/navigationbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCampground } from '@fortawesome/free-solid-svg-icons'
import {  } from '@fortawesome/free-regular-svg-icons';

export default function Navigationbar() {
  return (
    <div className='nav'>
        <div className='nav-menu'>
          <NavLink className="logo" to='/'>
            <FontAwesomeIcon icon={faCampground} size='1.5x'style={{margin : "5px"}} className='icons'/>
            Go Camping
          </NavLink>
          <NavLink to='/search' style={{fontSize : "1.5rem", color:"white"}}>캠핑장 검색</NavLink>
          <NavLink to='/event' style={{fontSize : "1.5rem", color:"white"}}>캠핑장 이벤트</NavLink>
          <NavLink to='/notice' style={{fontSize : "1.5rem", color:"white"}}>공지사항</NavLink>
        </div>
    </div>
  )
}