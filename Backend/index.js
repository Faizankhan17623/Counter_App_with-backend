const express = require('express');
require('dotenv').config();
const db_call = require('./config/db_connect');
const val = require('./routes/route')
const app = express();
var cors = require('cors')
const port = process.env.PORT || 4001;

app.use(cors({origin :"*"}))
app.use(express.json());
app.use('/api/v1',val);

app.use(
    cors({
        origin:"*",
    })
)
app.use(express.json());
app.use('/api/v1',val);

app.listen(port,()=>{
    console.log(`we are running on the port number,${port}`)
})
db_call();

app.get('/',(req,res)=>{
    res.status(200).json({
        response:true,
        message:"this is the default route"
    })
})