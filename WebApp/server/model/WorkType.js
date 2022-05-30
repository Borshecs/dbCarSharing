const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    AmountDiscount:{
        type: Number,
        required: false,
    },
    Name:{
        type: String,
        required: false
    }
})

const WorkTypedb = mongoose.model('WorkType', schema)

module.exports = WorkTypedb