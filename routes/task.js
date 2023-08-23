import express from "express"
import { isAuthenticated } from "../middlewares/auth.js";
import { deleteTask, getMyTask, newTask, updateTask } from "../controllers/task.js";

const Router = express.Router();

Router.post("/api/v1/users/task/new", isAuthenticated ,newTask)
Router.get("/api/v1/users/task/me", isAuthenticated ,getMyTask)

Router.route("/api/v1/users/task/:id").put(isAuthenticated,updateTask).delete(isAuthenticated,deleteTask)

export default Router;