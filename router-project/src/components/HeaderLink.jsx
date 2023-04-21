import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../css/headerlink.css'

export default function HeaderLink() {
  return (
    <div>
        {/** a태그 대신 컴포넌트의 주소로 이동 */}
        <NavLink 
          className={({isActive})=>isActive?"link-style":"link-nomal-style"}
          to="/"
        >Home</NavLink>
        <NavLink
            className={({isActive})=>isActive?"link-style":"link-nomal-style"}
            to="/story"
        >
            Story
        </NavLink>
        <hr></hr>
    </div>
  )
}
