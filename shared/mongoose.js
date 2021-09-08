const mongoose=require("mongoose");
const db_url="mongodb+srv://abhi:admin@cluster0.ujn56.mongodb.net/states?retryWrites=true&w=majority";

//const db_url="mongodb://localhost:27017/states";
mongoose.connect(db_url,{useNewUrlParser:true,useUnifiedTopology:true})

const connection=mongoose.connection;
module.exports=connection;



// const mongoose=require("mongoose");
// db_url="mongodb+srv://abhi:admin@cluster0.ujn56.mongodb.net/urlshortner?retryWrites=true&w=majority";
// mongoose.connect(db_url,{  useNewUrlParser: true , useUnifiedTopology:true})

// const connection =mongoose.connection;
// module.exports=connection;