const val = require('../modules/user_schema');
exports.Create = async (req,res)=>{
    try{   
        const {value} = req.body;
        const updating = await val.create ({value})
        const response = awaitval.find({__v:updating});
        res.status(200).json({
            success:true,
            message:"everything is right here"
        })
        console.log(response);
        if(response){
            res.send({
                response:value
            })
        }
        console.log(updating);
    }catch(err){
        res.status(400).json({
            success:false,
            message:"there is something wrong here"
        })
    }
}