const mongoose = require('mongoose');
require('dotenv').config();
const database = ()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{
        console.log("The db call is done")
    })
    .catch(()=>{
        console.log("there is an error in the code")
    })
}
module.exports = database;
