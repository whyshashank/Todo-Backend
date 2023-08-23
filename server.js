import {app} from "./app.js"
import { connectDb } from "./data/database.js";

connectDb();


app.listen(3000, () => {
    console.log("Server Working");
  });