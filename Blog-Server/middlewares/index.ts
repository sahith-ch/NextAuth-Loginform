
export const SECRET = 'SECr3t'; 
import jwt from "jsonwebtoken"  
import  { Request, Response ,NextFunction} from "express";
export const generatetoken=(user:any )=>{
    return  jwt.sign({userid:user},SECRET,{expiresIn:"1h"})
    }
    
export const Authorize  =(req:Request,res:Response,next:NextFunction)=>{
    const authHeader = req.headers.authorization

    if(authHeader){
    const token = authHeader.split(' ')[1]
    jwt.verify(token,SECRET,(err,data)=>{
        if(err){
            return res.sendStatus(403);
        }
        if (!data) {
            return res.sendStatus(403);
          }
        else{
            if(typeof data ==="string"){
               
                return res.sendStatus(403)
         
            }
            else{     
                  req.headers.userid = data.user._id;
                next();
            
            }
        }
    })
    }else{
        res.sendStatus(403)
    }
}