const mongoose=require('mongoose');
const MONGODB=async(req,res)=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MONGODB IS CONNECTED");
    } catch (error) {
        console.log("MONGODB IS NOT CONNECTED");
    }
}

module.exports=MONGODB