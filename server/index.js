const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
const Plant = require('./model/Plant');

//mongodb Connection
mongoose.connect('mongodb+srv://anand123:anand123@nursery-plant.mpanrx9.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
},()=>{
    console.log('MongoDB Connected...!');
});

//Add plant
app.post('/add/plant', async (req, res) => {
    const plant = new Plant({
        id: req.body.id,
        title: req.body.title,
        description: req.body.description,
        plant_url: req.body.plant_url,
        prize: req.body.prize,
        quantity: req.body.quantity,
        category: req.body.category
    });
    await plant.save();
    res.send({
        message:"Plant Added Successfully"
    })
});


//get all plants
app.get('/get/allplant', async (req, res) => {
    const plants = await Plant.find();
    res.send(plants);
});


//Get plant by id
app.post('/get/plant', async (req, res) => {
    const plant = await Plant.findOne({id : req.body.id});
    res.send(plant);
});

//Delete plant
app.post('/delete/plant', async (req, res) => {
    await Plant.deleteOne({id : req.body.id});
    res.send({
        message:"Plant Deleted Successfully"
    })
});

//Update plant
app.post('/update/plant', async (req, res) => {
    const plant = await Plant.updateOne({id : req.body.id},
        {$set : {title: req.body.title, description: req.body.description, plant_url: req.body.plant_url, prize: req.body.prize, quantity: req.body.quantity, category: req.body.category}
    });
    res.send({
        message:"Plant Updated Successfully"
    })
})


const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 