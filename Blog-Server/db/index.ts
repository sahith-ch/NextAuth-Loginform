import mongoose from "mongoose";

const userSchema =new mongoose.Schema({
username:String,
password:String,
Articles_published:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Articles_published' }],
})
const postSchema = new mongoose.Schema({
    Title:String,
    description:String,
    author:{type:mongoose.Schema.Types.ObjectId},
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Likes' }],
})
const commentSchema = new mongoose.Schema({
    content:String,
    author:{type:mongoose.Schema.Types.ObjectId},
    post: {type:mongoose.Schema.Types.ObjectId},

})

export const USERS = mongoose.model("Users",userSchema)
export const POSTS = mongoose.model("Posts",postSchema)
export const COMMENTS = mongoose.model("Comments",commentSchema)