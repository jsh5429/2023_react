import React from 'react'
import logo from '../img/React-icon.svg'
import '../css/home.css'

// {require("").default} 로 이미지 불러올 수 있음

export default function Home() {
  return (
    <div>
        <h1>Home</h1>
        <img width="500px" src={logo} alt="로고" />
        <p>react와 router로 작성한 페이지입니다.</p>
        <p>환영합니다</p>
    </div>
  )
}
