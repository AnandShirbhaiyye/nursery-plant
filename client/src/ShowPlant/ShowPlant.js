import React from 'react'
import "./Showplant.css"
export default function ShowPlant() {
  return (
    <>
      <h2 className='card-title text-center'>ShowPlant</h2>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4 mt-3 p-3 card-border'>
            <div className='box-sizing'>
            <img src="https://bloximages.chicago2.vip.townnews.com/thesouthern.com/content/tncms/assets/v3/editorial/1/c3/1c3d3c5f-d978-526f-a866-fa4ead9004c8/570448dd301db.image.jpg?resize=1200%2C800" className='img-sizing' alt='plantimg' />
            <div className='text-sizing'>
            <span>id</span>
            <span>title</span>
            <span>description</span>
            <span>prize</span>
            <span>quantity</span>
            <span>category</span>
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
