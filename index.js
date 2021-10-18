const express =require("express");
const app=express();

const cors=require("cors")
app.use(cors())
const connection=require("./shared/mongoose")
connection.once('open',()=>{console.log('db connected')})
connection.on('error',()=>{console.log('Error')})
app.use(express.json({extended:false}))
app.use("",require("./routes/allroutes"));
app.use("",require("./routes/stateroutes"))



app.listen(process.env.PORT|| 3002,()=>{console.log("port connected 3002")}) 