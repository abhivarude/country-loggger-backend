
const mongoose=require("mongoose");



const signupSchema=new mongoose.Schema(
{
name:String,
email:String,
data:String    
}
)

const stateschema=new mongoose.Schema({});

exports.signupSchema=mongoose.model('Signup',signupSchema,'signup')
exports.stateschema=mongoose.model('statesdata',stateschema,'statesdata');
