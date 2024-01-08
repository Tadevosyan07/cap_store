import mongoose from "mongoose";

const capSchema = new mongoose.Schema({
    url:{ type:String, required:true  },
    hoverURL:{ type:String, required:true },
    title:{ type:String, required:true } ,
    price: { type:Number, required:true },
},
{
    timestamps:true
})

const Cap = mongoose.model("Cap", capSchema )

export default Cap