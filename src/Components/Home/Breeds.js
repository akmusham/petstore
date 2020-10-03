import React,{useState} from 'react'
import path from 'path'

function Breeds() {
  const MainBreeds = [
    {"breed_category":"large","_id":"1jADEWea6zkUmK2m","path": "/assets/images/smallBreeds.jpg"},
    {"breed_category":"medium","_id":"KlyDPeI36xmGVJAi","path": "/assets/images/smallBreeds.jpg"},
    {"breed_category":"small","_id":"YKSWv3dTfkYEo1KF","path": "/assets/images/smallBreeds.jpg"}
  ]
  const [Breeds,SetBreeds] = useState(MainBreeds)
  console.log(__dirname);
  return(
    <div className="container">
      {Breeds.map((each,i)=>{
        return(
          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12" key={i}>
            <div class="shop-cat-box">
              <img class="img-fluid" src="" alt="" />
              <a class="btn hvr-hover" href="#">{each.breed_category}</a>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Breeds
