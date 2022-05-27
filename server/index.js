const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());
const PORT = 5000;


//mongodb Connection
mongoose.connect('mongodb+srv://suraj:suraj@cluster0.gfb4i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
},()=>{
    console.log('MongoDB Connected...!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 