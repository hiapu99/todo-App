const express=require('express');
const app=express();
const router=require('./routes/todo.routes');
const cors=require("cors");
const MONGODB=require("./config/config");
const dotenv=require('dotenv');
dotenv.config();
MONGODB();
const PORT=process.env.PORT || 4000;


app.use(cors());
app.use(express.json());


app.use("/api",router);

app.listen(PORT,()=>{
  console.log(`server is runing ${PORT}`)
})