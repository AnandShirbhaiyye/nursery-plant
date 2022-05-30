import React from 'react';
import ShowPlant from '../ShowPlant/ShowPlant';
import axios from 'axios';
import {useState, useEffect} from 'react'

export default function FetchData() {

  const [plant, setPlant] = useState([]);

  useEffect(() => {
    axios.get('/get/allplant').then(res => {
      setPlant(res.data);
    })
  }, [])


  // useEffect(()=>{
  //   async function fetchdata(){
  //     const response =await axios.get("/get/allplant");
  //       setPlant(response.data.data);
  //   }
  //   fetchdata();
  //   },[])

  return (
       <div>
         
         <div className='container mt-4' >
       <h1 className="text-center">Show Plant</h1>
         {
           plant.map(plants =><ShowPlant id={plants.id} title={plants.title} description={plants.description}
           plant_url={plants.plant_url} prize={plants.prize} quantity={plants.quantity} category={plants.category}  />)
         }
       </div>
    </div>
  )
}

