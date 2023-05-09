import React from 'react'
import '../css/reset.css'
import {NavLink} from 'react-router-dom'
import TopSlider from '../components/TopSlider';
import Search from './Search';
import Footer from '../components/Footer';
import CampingSlide from '../components/CampingSlide';
import VideoSlide from '../components/VideoSlide';



export default function Home() {
  return (
    <div style={{backgroundColor : "#BFAE99"}}>
      <TopSlider />
      <CampingSlide />
      <VideoSlide />
      <Footer />
    </div>
  )
}
