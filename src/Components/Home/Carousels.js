import React from 'react'

function Carousels() {
  return(
    <div>
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      {/*<li data-target="#myCarousel" data-slide-to="2"></li>*/}
    </ol>
    <div className="carousel-inner">

      <div className="item active">
        <div className="header-container">
          <div className="dog-header-content">
            <h2 className="header-text">Hello Hooman,</h2>
            <p className="header-subtext">Welcome to our kennel</p>
            <button className="woof-button">Woof <i className="fa fa-paw"></i></button>
          </div>
          <div className="dog-header-container">
            <img className="showcase-img" alt="dog" src={require('../../assets/images/Dog2.png')} />
          </div>
        </div>
      </div>

      <div className="item">
        <div className="header-container">
          <div className="dog-header-content">
            <h2 className="header-text">Why should Hoomans</h2>
            <p className="header-subtext">have all the fun</p>
            <button className="woof-button">Pawnect <i className="fa fa-paw"></i></button>
          </div>
          <div className="dog-header-container">
            <img className="showcase-img-dating" alt="dog" src={require('../../assets/images/dating.png')} />
          </div>
        </div>
      </div>
    </div>
        <a className="left carousel-control" href="#myCarousel" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="#myCarousel" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  )
}

export default Carousels
