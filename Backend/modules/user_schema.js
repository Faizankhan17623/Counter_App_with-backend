const mongoose = require("mongoose")
const Schema = new mongoose.Schema({
    value:{
        type:String,
        require:true
    }
})

module.exports = mongoose.model('value',Schema);