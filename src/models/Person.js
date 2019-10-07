const mongoose = require('mongoose')

const PersonSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    lastname:{
        type: String,
        required: true
    },
    linkedin:{
        type: String,
        required: true,
    },
    log: {
        type: Date,
        default: Date.now,
    },
})

mongoose.model("Person", PersonSchema)