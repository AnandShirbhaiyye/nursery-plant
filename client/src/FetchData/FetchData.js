import React from 'react';
import ShowPlant from '../ShowPlant/ShowPlant';
import axios from 'axios';
import {useState, useEffect} from 'react';
import './FetchData.css'
import { Link } from 'react-router-dom';

export default function FetchData() {

  const [plant, setPlant] = useState([]);

  useEffect(() => {
    axios.get('/get/allplant').then(res => {
      setPlant(res.data);
    })
  })


  // useEffect(()=>{
  //   async function fetchdata(){
  //     const response =await axios.get("/get/allplant");
  //       setPlant(response.data.data);
  //   }
  //   fetchdata();
  //   },[])

  return (
       <>
          <div className='gradient'>
         <div className='container' >
       <button  className="button_plant mt-4">
       <Link className='btnplant' to={'/addplant'}><h4><i class="fa-solid fa-square-plus" style={{color:"black"}}></i> ADD PLANTS</h4></Link>
       </button>
       <h1 className="text-center card-title">Show Plant☘️</h1>
       <hr/>
       <div className='row'>
         {
           plant.map(plants =><ShowPlant id={plants.id} plant_url={plants.plant_url} title={plants.title} description={plants.description}
             prize={plants.prize} quantity={plants.quantity} category={plants.category}  
             />)
         }
         </div>
       </div>
       </div>
    </>
  )
}

