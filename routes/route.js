import express from "express"
const  Router = express.Router();
import {getAllUsers, getMyDetail, loginUsers,newUsers,logoutUsers} from "../controllers/usersss.js"
import {isAuthenticated} from "../middlewares/auth.js"
  
  Router.get("/api/v1/users/all",getAllUsers)
  Router.post("/api/v1/users/register", newUsers)
  Router.post("/api/v1/users/login",loginUsers)
  Router.get("/api/v1/users/logout",logoutUsers)
  Router.get("/api/v1/users/me",isAuthenticated , getMyDetail)

export default Router