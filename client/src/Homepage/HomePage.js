import React from 'react';
import { Link } from 'react-router-dom';
import image from './img/plant.jpg';
import img from './img/plant2.jpg';
import tree4 from './img/tree4.jpg';
import tree1 from './img/tree1.jpg';
import tree3 from './img/tree3.jpg';
import Video from './img/about-vid.mp4'
import './HomePage.css';
import Card from '../Card/Card';

function HomePage() {
  return (
    <div className='gradient'>
  <div id="carouselExampleControls" className="carousel slide " data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" style={{height:"500px"}}>
      <img src={image} className="d-block w-100" alt="..."></img>
    </div>
    <div className="carousel-item">
      <img src={img} className="d-block w-100" alt="..."></img>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div><br></br>
<h1 className="text-center planttext">We are here to inspire a world where every plant journey is a personal revolution of inner change and growth</h1>
<br></br>

 

<div className="container mt-5 mb-5">
  <div className="row">
    <div className="col-md-4">
       <img  className='img_hover' src={tree4} alt=''/>
      </div>
      <div className='col-md-4'>
      <img  className='img_hover' src={tree1} alt=''/>
      </div>
      <div className="col-md-4">
      <img  className='img_hover' src={tree3} alt=''/>
      </div>
      </div>
</div>

<div className='text-center customer_review mt-5 mb-5'><h1>About Us</h1></div>
<div className='container'>
    <div className='row'>
      <div className='col-md-5'>
   <video className='videoabout' width="100%" height="90%" controls>
  <source src={Video} type="video/mp4"></source>
  Your browser does not support HTML5 video.
</video>
        </div>
        <div className='col-md-7'>
          <div className=''>
            <h2><b>Why Choose us ?</b></h2>
            <p className='text-center paragraph_home '>
              We are here to inspire a world where every plant journey is a personal revolution of inner change and growth.
              We are here to inspire a world where every plant journey is a personal revolution of inner change and growth.
              We are here to inspire a world where every plant journey is a personal revolution of inner change and growth.
              We are here to inspire a world where every plant journey is a personal revolution of inner change and growth.
              </p>
              <button className='Learnmore text-center'>Learn More</button>
          </div>
        </div>
        </div>
  </div><br/>
  <div className='text-center customer_review  mb-5'><h1>Plants Features</h1></div>
  <Card/>

<div className='text-center customer_review mt-5'><h1>Customer Review</h1></div>
<div className='container'> 
  <div className="row row-cols-1 row-cols-md-3 g-4 mt-2">
  <div className="col">
    <div className="card p-2" style={{backgroundColor:"lightblue",borderRadius:"20px"}}>
      <div className="card-body">
      <span classname="font-star"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span>
        <h5 className="card-title">User Review</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>

      <div className='container'>
      <div className='row'>
             <div className='col-md-3'>
               <img src={image}  className="img_custumer" alt=''/>
             </div>
             <div className='col-md-9'>
                <span >Anand Shirbhaiyye</span><br/>
                <span>anand@gmail.com</span>
             </div>
             </div>
      </div>
    </div>
  </div>

  <div className="col">
    <div className="card p-2" style={{backgroundColor:"lightblue" ,borderRadius:"20px"}}>
      <div className="card-body">
      <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
        <h5 className="card-title">User Review</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div className='container'>
      <div className='row'>
             <div className='col-md-3'>
               <img src={image}  className="img_custumer" alt=''/>
             </div>
             <div className='col-md-9'>
                <span >Anand Shirbhaiyye</span><br/>
                <span>anand@gmail.com</span>
             </div>
             </div>
      </div>
    </div>
  </div>

  <div className="col">
    <div className="card p-2" style={{backgroundColor:"lightblue" ,borderRadius:"20px"}}>
      <div className="card-body">
      <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
        <h5 className="card-title">User Review</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div className='container'>
      <div className='row'>
             <div className='col-md-3'>
               <img src={image}  className="img_custumer" alt=''/>
             </div>
             <div className='col-md-9'>
                <span >Anand Shirbhaiyye</span><br/>
                <span>anand@gmail.com</span>
             </div>
             </div>
      </div>
    </div>
  </div>

  </div>

 
</div>
<span className='mb-5 br_margin mt-5'><br/><br/><br/></span>
</div>
)
}

export default HomePage;

