import express from "express";
import mongoose from "mongoose";

console.log(process.env.ENV)

console.log(process.env.JWT_SECRET)
const app = express();
const cookieParser = require('cookie-parser')
const port: number = 3030;

app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());
const uri = process.env.MONGODB_URI;
mongoose.connect(
  ('mongodb+srv://chaim14:82148214cc@cluster0.ar8tn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
).then(res=>{
  console.log("Connected to DB");
}).catch(err=>{
  console.log('At mongoose.connect:')
  console.error(err.message)
});

import usersRoute from "./routes/usersRoute";
app.use("/users", usersRoute);

app.listen(port, () => {
  return console.log(`Server is listening at http://localhost:${port}`);
});
