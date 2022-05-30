const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    Surname:{
        type: String,
        required: true
    },
    Name:{
        type: String,
        required: true
    },
    Patronymic:{
        type: String,
        required: false
    },
    Adress:{
        type: String,
        required: true
    },
    Phone:{
        type: String,
        required: false,
        unique: true
    }
})

const Workerdb = mongoose.model('Customer', schema)

module.exports = Workerdb