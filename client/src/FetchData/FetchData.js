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
  }, [])


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
       <h1 className="text-center">Show Plant</h1>
       <hr/>
       <Link to={'/addplant'} class="btn btn-outline-success w-100"><b>ADD PLANTS</b></Link>
         {
           plant.map(plants =><ShowPlant id={plants.id} title={plants.title} description={plants.description}
           plant_url={plants.plant_url} prize={plants.prize} quantity={plants.quantity} category={plants.category}  />)
         }
       </div>
       </div>
    </>
  )
}

