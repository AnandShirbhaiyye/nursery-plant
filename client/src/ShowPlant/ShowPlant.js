import React from 'react'
import "./Showplant.css"
import axios from 'axios'
import {useState, useEffect} from 'react'
import swal from 'sweetalert'
export default function ShowPlant(props) {

  async function deletePlant(){
    
    const result = await axios.post('/delete/plant', {
      id: props.id
    })
    if(result.data.status === 'success'){
      swal("Success!", "Plant Deleted successfully!", "success").then((value) => {
        props.history.push('/get/allplant')
      })
    }
    else{
      swal("Error!", result.data.message, "warning");
    }
  }
   
  
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4 mt-3 p-3 card-border'>
            <div className='box-sizing'>
            <img src={props.plant_url} className='img-sizing' alt='plantimg' />
             {/* <img src="https://bloximages.chicago2.vip.townnews.com/thesouthern.com/content/tncms/assets/v3/editorial/1/c3/1c3d3c5f-d978-526f-a866-fa4ead9004c8/570448dd301db.image.jpg?resize=1200%2C800" className='img-sizing' alt='plantimg' /> */}
            <div className='text-sizing'>
            <span>ID :{props.id}</span>
            <span>TITLE :{props.title}</span>
            <span> DESCRIPTION :{props.description}</span>
            <span>PRIZE :{props.prize}</span>
            <span>QUANTITY :{props.quantity}</span>
            <span>CATEGORY :{props.category}</span>
            </div>
            <div className='btn-sizing mt-3'>
              <div className='row'>
              <div className='col-md-6'>
            <button className='btn btn-success w-100'>Edit</button>
            </div>
            <div className='col-md-6'>
            <button className='btn btn-danger w-100'
             onClick={deletePlant}>Delete</button>
            </div>
            </div>
            </div>
          </div>
        </div>        
      </div>
      </div>
    </>
  )
}
