import React from 'react'
import Carousel from './Carousel'
import Carousels from './Carousels'
import Breeds from './Breeds'
import Footer from './Footer'

function home() {
  return(
    <div>
      <div>
        <img className="showcase-img" alt="dog" src={require('../../assets/images/paws.jpg')} />
      </div>
      {/* <Carousels /> */}
      <Breeds />
      <Breeds />
      <Footer />
    </div>
  )
}

export default home
