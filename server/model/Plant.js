const mongoose = require('mongoose');

const Plant = mongoose.Schema({
    id: {type: 'number'},
    title: {type : 'string'},
    description:{type: 'string'},
    plant_url:{type: 'string'},
    prize:{type: 'number'},
    quantity:{type: 'number'},
    category:{type: 'string'},
});

const model = mongoose.model('Plant', Plant);
module.exports = model;
