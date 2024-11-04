const mongoose = require('mongoose')

const FormSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        minlength: 4
    },
    mobile: {
        type: String,
        require: true,
        match: /^\d{10}$/
    },
    email: {
        type: String,
        required: true,
        match: /\S+@\S+\.\S+/,
    },
    message:{
        type:String,
        require:true
    },
},{timestamps:true})

const Form = mongoose.model('Form',FormSchema)

module.exports=Form;