import React from 'react'
import "./Showplant.css"
import axios from 'axios'
import { Link , useNavigate} from 'react-router-dom'
import swal from 'sweetalert'
export default function ShowPlant(props) {

  const navigate = useNavigate()

  async function deletePlant(){
    
    const result = await axios.post('/delete/plant', {
      id: props.id
    })
      swal("Success!", "Plant Deleted successfully!", "success");
      window.location.reload();
  }
   
  
  return (
    <>
          {/* <div className='col-6 mt-3 p-3'>
            <div className='box-sizing card-border'>
            <img src={props.plant_url} className='img-sizing' alt='plantimg' />
            <div className='text-sizing'>
            <span>ID :{props.id}</span>
            <span>TITLE :{props.title}</span>
            <span> DESCRIPTION :{props.description}</span>
            <span><i class="fa-solid fa-indian-rupee-sign"></i> PRIZE :{props.prize}</span>
            <span>QUANTITY :{props.quantity}</span>
            <span>CATEGORY :{props.category}</span>
            </div>
            <div className='btn-sizing mt-3'>
              <div className='row'>
              <div className='col-md-6'>
            <button className='button_show_plants w-100'><b>Edit</b></button>
            </div>
            <div className='col-md-6'>
            <button type='submit' className='button_show_plant w-100'
            onClick={deletePlant}><b>Delete</b></button>
            </div>
            </div>
            </div>
          </div>
        </div>         */}

<div className='col-4 mb-5'>
<div className='box-sizing card-border'>
<div class="cards">
  <div class="card">
    <span class="card_title_id"><span className='props_id'>{props.id}</span>{props.title}
    <span className='card_title_prize'><i class="fa-solid fa-indian-rupee-sign"></i>{props.prize}</span>
    </span>
    
    <img src={props.plant_url} alt=""/>
    <p class="card-desc">
    <div className='category_quantity'>
    <span>CATEGORY : {props.category}</span><br/>
    <span>QUANTITY : {props.quantity}</span><br/>
    </div>
      {props.description}
    <div className='btn-sizing mt-3'>
              <div className='row'>
              <div className='col-md-6'>
                {/* <Link to="/editplant"> */}
            <button className='button_show_plants w-100'
             onClick={()=>{
              navigate("/editplant",{state : "499"});
            }}><b>Edit</b></button>
            {/* </Link> */}
            </div>
            <div className='col-md-6'>
            <button type='submit' className='button_show_plant w-100'
            onClick={deletePlant}><b>Delete</b></button>
            </div>
            </div>
            </div> 
    </p>
  </div>
  </div>
  </div>
  </div>
    </>
  )
}
