import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({

    url:{ type:String, required:true },
    userUrl:{ type:String, required:true } ,
    role:{ type:String, required:true } ,
    roleIcoUrl:{ type:String, required:true } ,
    date_time:{ type:String, required:true } ,
    text1:{type:String, required:true} ,
    text2:{type:String, required:true} ,
    views:{type:String, required:true} ,
    comment:{type:String, required:true} ,
    likes:{type:String, required:true} ,
    likesIco:{type:String, required:true} ,
    likedIco:{type:String, required:true} ,
    
},
{
    timestamps:true
})

const Blog = mongoose.model("Blog", blogSchema)

export default Blog