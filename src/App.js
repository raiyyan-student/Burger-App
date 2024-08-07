import React from 'react'
import './App.css'
import Header from './Components/Header'
import HeroSection from './Components/Herosection'
import About from './Components/About'
import Menu from './Components/Menu'
import Reviews from './Components/Reviews'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
import Reservation from './Components/Reservation'
import Gallery from './Components/Gallery'

const App = () => {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <About/>
      <Menu/>
      <Gallery/>
      <Reservation/>
      <Reviews/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App