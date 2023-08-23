import jwt from "jsonwebtoken"

export const sendCookies =(user,res,message,statuscode)=>{

    const token= jwt.sign({_id: user._id},process.env.JWT_SECRET)

    res.status(statuscode).cookie("token",token,{
     maxAge:15*60*1000,
     httpOnly:true,
     sameSite:process.env.NODE_ENV==="development" ?"lax" :"none",
     secure:process.env.NODE_ENV==="development"? false : true
 
    }).json({
     success:true,
     message
    })
}