const mongoose = require('mongoose');

const Auth = mongoose.Schema({
    firstname: {type: 'string'},
    lastname: {type: 'string'},
    email: {type: 'string'},
    phone: {type: 'number'},
    password: {type: 'string'}
});
const model = mongoose.model('Auth', Auth);
module.exports = model;
