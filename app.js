import express from "express";

import shashank  from "./routes/route.js"
import taskRouter from "./routes/task.js";

import {config} from  "dotenv"
import cookieParser from "cookie-parser";
import cors from "cors"

config({
  path: "./data/config.env"
})
export const app = express();


//middlewares
app.use(express.json())
app.use(cookieParser())
app.use(cors({
  credentials:true,
  methods:["GET","POST","PUT","DELETE"],
  origin:[process.env.FRONTEND_URI ]
}))

app.use(shashank);
app.use(taskRouter)



