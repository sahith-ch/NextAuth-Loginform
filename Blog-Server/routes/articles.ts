import { COMMENTS, POSTS } from './../db/index';
import { Authorize } from './../middlewares/index';
import express  from "express";

import { USERS } from "../db";

const router= express.Router()

router.get("/me",Authorize,async(req,res)=>{

    const user = await USERS.findById(req.headers._id)
    if(user){
    res.json({message:user.Articles_published})
    }
    else{
        res.sendStatus(403);
    }
    })

router.post("/",Authorize,async(req,res)=>{
 
    const {Title,description,comments,likes}= req.body
const post = {
    author : req.headers.userid,
    Title:Title,
    description:description,
    comments:comments,
    likes:likes
} 
    const newpost = new POSTS(post)
  
    const user = await USERS.findById(req.headers.userid)
    console.log(req.headers.userid)
    if(user){
        
 user.Articles_published.push(newpost._id)
 await user.save()
 await newpost.save()

 try{
    res.json({message:"Post created"})
    }
    catch(err){
        console.log(err)
    }
}else{
    res.sendStatus(403)
}

})
router.put("/likes",Authorize,async(req,res)=>{
   
    const postid = req.headers.postid

const post = await POSTS.findByIdAndUpdate(postid, { $addToSet:{ likes: req.headers.userid} },{new:true})

if(post){   
    res.json({message:"liked"})
 }
else{
     res.sendStatus(403)
 }

})

router.put("/:id",Authorize,async(req,res)=>{
    const {newuser} = req.body
const postid = req.params.id
const post = await POSTS.findByIdAndUpdate(postid,newuser,{new:true})
if(post){
    res.json({post})
}
else{
    res.sendStatus(403)
}

})


export default router