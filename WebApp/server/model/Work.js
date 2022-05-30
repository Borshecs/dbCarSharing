const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    DateOfissue:{
        type: Date,
        required: true
    },
    ReturnDate:{
        type: Date,
        required: true
    },
    CarCondition:{
        type: String,
        required: true
    }
})

const Workdb = mongoose.model('Work', schema)

module.exports = Workdb