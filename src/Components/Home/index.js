import React from 'react'
import Carousel from './Carousel'
import Carousels from './Carousels'
import Breeds from './Breeds'
import Footer from './Footer'
import InterSectionBanner from './InterSectionBanner'
function home() {
  const Carousel1 = () => {
    return(
      <div className="header-container">
        <div className="dog-header-content">
          <h2 className="header-text">Henlo Hooman,</h2>
          <p className="header-subtext">Welcome to our kennel</p>
        </div>
        <div className="dog-header-container">
          <img className="showcase-img" alt="dog" src={require('../../assets/images/Dog2.png')} />
        </div>
      </div>
    )
  }
  return(
    <div>
      {/*<Carousel1 />*/}
      <Carousels />
      <Breeds />
      <InterSectionBanner />
      <Footer />
    </div>
  )
}

export default home
