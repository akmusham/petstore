import React from 'react'

function Carousels() {
  return(
    <div>
      <div id="pv-carousel-3" class="carousel pv-carousel-3 slide" data-ride="carousel">
        <ol class="carousel-indicators pv-carousel-3__indicators hide">
            <li data-target="#pv-carousel-3" data-slide-to="0" class="active"></li>
            <li data-target="#pv-carousel-3" data-slide-to="1"></li>
            <li data-target="#pv-carousel-3" data-slide-to="2"></li>
            <li data-target="#pv-carousel-3" data-slide-to="3"></li>
        </ol>
        <div class="pv-carousel-3__carousel-caption hide">
            <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita reprehenderit perferendis rerum assumenda
                quos neque eaque libero suscipit autem sequi.</h1>
            <p>
                <a class="btn btn-lg btn-primary btn-cta" href="#" role="button">Sign up today!!</a>
            </p>
        </div>

        <div  style={{height: '100vh'}} class="carousel-inner pv-carousel-3__carousel-inner">
            <div class="item active">
                <img src={require('../../assets/images/sakhalin-husky.jpg')} alt="" />
            </div>
            <div class="item">
                <img src="https://www.telegraph.co.uk/content/dam/Pets/spark/royal-canin/happy-puppy.jpg" alt="" />
            </div>
            <div class="item">
                <img src="https://pagevamp-uploads.s3.amazonaws.com/1817612721859020/057879200-1510647824pixabay-bb4832c8982646435e.jpg" alt="" />
            </div>
            <div class="item">
                <img src="https://pagevamp-uploads.s3.amazonaws.com/1817612721859020/041815100-1513235463pixabay-bb423ac19d294450.jpg" alt="" />
            </div>
        </div>

        <div class="pv-carousel-3__control hide">
            <a class="left carousel-control" href="#pv-carousel-3" data-slide="prev">
                <i class="icon-arrow-left"></i>
            </a>
            <a class="right carousel-control" href="#pv-carousel-3" data-slide="next">
                <i class="icon-arrow-right"></i>
            </a>
        </div>
    </div>
      {/*<div class="inner-wrap">
          <div class="hero-wrap text-center">
              <h1>PV Carousel 3 (Full Height Slider - Relative)</h1>
              <h2>Your content goes here</h2>
          </div>
          <div class="content">
              Other Contents Here
          </div>
      </div>*/}
    </div>
  )
}

export default Carousels
