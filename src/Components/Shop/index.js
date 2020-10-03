import React,{useEffect} from 'react'
import Product from './Product'
import axios from 'axios'

function Shop() {
  const dogs = [
    {
      Breed: "pompsky",
      weight: 10, //kgs
      age: 3, //months
      price: 10000,
      image_url: "",
      sex: "male",
      color: "brown",
      category: "small",
      tags: ["furry","old eyes"]
    },
    {
      Breed: "husky",
      weight: 10, //kgs
      age: 3, //months
      price: 10000,
      image_url: "",
      sex: "male",
      color: "brown",
      category: "small",
      tags: ["furry","old eyes"]
    },
    {
      Breed: "husky",
      weight: 10, //kgs
      age: 3, //months
      price: 10000,
      image_url: "",
      sex: "male",
      color: "brown",
      category: "small",
      tags: ["furry","old eyes"]
    },
    {
      Breed: "husky",
      weight: 10, //kgs
      age: 3, //months
      price: 10000,
      image_url: "",
      sex: "male",
      color: "brown",
      category: "small",
      tags: ["furry","old eyes"]
    },
    {
      Breed: "pom",
      weight: 10, //kgs
      age: 3, //months
      price: 10000,
      image_url: "",
      sex: "female",
      color: "brown",
      category: "small",
      tags: ["furry","old eyes"]
    }
  ]
  return (
    <div>
      <div className="flex-container" style={{display: "flex",width: "100%",justifyContent: "space-between",padding: "5%"}}>
        {dogs.map((each,index)=>{
          return(
            <Product {...each} />
          )
        })}
      </div>
    </div>
  )
}

export default Shop
