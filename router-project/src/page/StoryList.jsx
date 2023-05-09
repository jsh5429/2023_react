import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import { useState, useContext } from 'react'
import DataContext from '../context/DataContext';
import '../css/storyList.css'

// to = {} 에서 param으로 전달되는 값을 정해준다.
// 여기서 지정해주는 것
export default function StoryList() {
    const value = useContext(DataContext);

  return (
    <div>
        <h1>StoryList</h1>
        {
            value.state.list.map((f, i)=>(
                <Link className="storyList-style"
                to={`/story/${f.name}`} key={i}>
                  <span>
                    {f.name}Story
                  </span></Link>
            ))
        }
        <Outlet />
    </div>
    
  )
}
