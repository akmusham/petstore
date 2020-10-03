import React from 'react'
import './index.css'

function Product(props) {
  let {Breed,weight,age,sex} = props
  return(
    <div className="card">
      <div className="img-container">
        <img style={{width: "100%"}} src="https://images-na.ssl-images-amazon.com/images/I/51cendGFkQL.jpg" />
      </div>
      <div className="desc-container">
        <h4>{Breed}</h4>
        <p>{weight} Kgs</p>
        <p>{age} Months</p>
        <p>{sex}</p>
      </div>
      <div>
        <button>Buy Now</button>
      </div>
    </div>
  )
}

export default Product
