const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    Yearofissue:{
        type: Date,
        required: true
    },
    Price:{
        type: Number,
        required: true
    },
    RentalCost:{
        type: Number,
        required: true
    },
    Type:{
        type: String,
        required: true
    },
    Brand:{
        type: String,
        required: true
    }
})

const Transactiondb = mongoose.model('Transaction', schema)

module.exports = Transactiondb