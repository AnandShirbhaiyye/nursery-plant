import React from 'react'
import './AddPlant.css'
import { useState } from "react";
import plantimg from './jaconda-52.png';
import axios from 'axios';
import swal from "sweetalert";
import { Link, useNavigate } from "react-router-dom";
export default function AddPlant() {

    const navigate = useNavigate();

    const [addplant,setAddPlant] = useState({
        id:"",
        title:"",
        description:"",
        plant_url:"",
        prize:"",
        quantity:"",
        category:""
    });


    async function plantsubmit(e) {
        e.preventDefault();
        if (
            addplant.id === "" ||
            addplant.title === "" ||
            addplant.description === "" ||
            addplant.plant_url === "" ||
            addplant.prize === "" ||
            addplant.quantity === "" ||
            addplant.category === ""
          ){
            swal("Error", "Please fill all the fields", "error");
          }
            else {
                await axios
                  .post("/add/plant", {
                    id: addplant.id,
                    title: addplant.title,
                    description: addplant.description,
                    plant_url: addplant.plant_url,
                    prize: addplant.prize,
                    quantity: addplant.quantity,
                    category: addplant.category
                  })
                  .then((res) => {
                    swal("Success!", "Plant Added successfully!", "success").then(
                      (value) => {
                        navigate("/");
                      }
                    );
                  })
                  .catch((err) => {
                    console.log(err);
                    swal("Error!", err.message, "warning");
                  });
              }
            }
        //  await axios.post("/add/plant",addplant)
        //  .then(res => {
        //    console.log(res.data);
        //    alert("Plant added successfully");
        //  })
        //  .catch(err => {
        //    console.log(err);
        //    alert("plant added failed");
        //  })
    //     }
    //    }

  return (
      <div className='gradient'>
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 mt-3'>
               <img src={plantimg} className='img' alt='plantimg'/>
            </div>
            <div className='col-md-6'>
            <div className='mt-2'>
                        <h2 className='card-title text-center'>Add Plant</h2>
                        <form onSubmit={plantsubmit} >
                            <div className='form-group'>
                                <label><b>Plant ID :</b></label>
                                <input type='number' className='form-control' placeholder='Enter Plant ID'
                                 value={addplant.id} onChange={(e)=>setAddPlant({...addplant,id:e.target.value})}
                                 required
                                 />
                                </div>
                                <div className='form-group'>
                                <label className='mt-2'><b>Plant Title :</b></label>
                                <input type='text' className='form-control' placeholder='Enter Plant Title'
                                value={addplant.title} onChange={(e)=>setAddPlant({...addplant,title:e.target.value})}
                                required
                                />
                                </div>
                                <div className='form-group'>
                                <label className='mt-2'><b>Plant Description :</b></label>
                                <input type='text' className='form-control' placeholder='Enter Plant Description'
                                value={addplant.description} onChange={(e)=>setAddPlant({...addplant,description:e.target.value})}
                                required
                                 />
                                </div>
                                <div className='form-group'>
                                <label className='mt-2'><b>Plant URL :</b></label>
                                <input type='text' className='form-control' placeholder='Enter Plant URL'
                                value={addplant.plant_url} onChange={(e)=>setAddPlant({...addplant,plant_url:e.target.value})}
                                required
                                />
                                </div>
                                <div className='form-group'>
                                <label className='mt-2'><b>Plant Prize :</b></label>
                                <input type='text' className='form-control' placeholder='Enter Plant Prize'
                                value={addplant.prize} onChange={(e)=>setAddPlant({...addplant,prize:e.target.value})}
                                required
                                />
                                </div>
                                <div className='form-group'>
                                <label className='mt-2'><b>Plant Quantity :</b></label>
                                <input type='text' className='form-control' placeholder='Enter Plant Quantity'
                                value={addplant.quantity} onChange={(e)=>setAddPlant({...addplant,quantity:e.target.value})}
                                required
                                />
                                </div>
                                <div className='form-group'>
                                <label className='mt-2'><b>Plant Category :</b></label>
                                <input type='text' className='form-control' placeholder='Enter Plant Category'
                                value={addplant.category} onChange={(e)=>setAddPlant({...addplant,category:e.target.value})}
                                required
                                />
                                </div>
                                <button type='submit' className='btn btn-success w-100 mt-4'><b>Add Plant</b></button>
                        </form>
                        </div>
            </div>
       </div>
    </div>
    </div>
  )
}
