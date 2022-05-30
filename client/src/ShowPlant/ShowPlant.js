import React from 'react'
import "./Showplant.css"
export default function ShowPlant(props) {
  return (
    <>

            {/* <div className='row'>
            <div className='col-md-6'>
            <h2>Id: {props.id}</h2>
            <h2>TITLE : {props.title}</h2>
            <h2>DESCRIPTION : {props.description}</h2>
            <h2>PRIZE : {props.prize}</h2>
            <h2>QUANTITY : {props.quantity}</h2>
            <h2>CATEGORY : {props.category}</h2>
            </div>
            <div className='col-md-6'>
            <div class="d-grid gap-2 col-6 mx-auto">
                <button className="btn btn-danger mt-2" type="button" >Delete</button>
                <button className="btn btn-success mt-3" type="button">Update</button>
                <button className="btn btn-warning mt-3" type="button">Read</button>
            </div>
            </div>
        </div> */}

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
            <button className='btn btn-danger w-100'>Delete</button>
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
