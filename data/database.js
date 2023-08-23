
import mongoose from "mongoose";


export const connectDb=()=> {
mongoose.connect(process.env.MONGO_URI,{dbName:'ChotuAPI'}).then(()=>{
    console.log("db connected") 
}).catch((e)=>{
    console.log(e)
});

}