import express from "express"
import mongoose, { Mongoose } from "mongoose";
import { USERS } from "../db";
import { Authorize, generatetoken } from "../middlewares";
export const SECRET = 'SECr3t'; 
const router = express.Router()




router.post("/login",async(req,res)=>{
    const {username,password}=req.body;
    const user =  await USERS.findOne({username,password})
if(user){
  const token=  generatetoken(user)
    res.json({message:token})   
}
else{
    res.json({message:"user not found"})
}
})

router.post("/signup",async(req,res)=>{
    const {username,password}=req.body;
    const user =  await USERS.findOne({username:username,password:password})
if(user){
res.json({message:"user exists"})
}
else{
const newuser =  new USERS( {username,password})
newuser.save()
    const token=  generatetoken(user)
    res.json({message:token})  

}
})



export default router