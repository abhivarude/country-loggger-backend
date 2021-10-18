
const mongoose=require("mongoose");



const signupSchema=new mongoose.Schema(
{
name:String,
email:String,
data:String    
}
)

const finalsignup=new mongoose.Schema({

name:String,
email:String,
password:String,


    
})
const stateschema=new mongoose.Schema({});

const bookingdata=new mongoose.Schema({
    email:String,
    hotellocation:String,
    hotelin:String,
    hotelout:String,

    flightfrom:String,
    flightto:String,
    bookdate:String,
    trip:String

});



exports.signupSchema=mongoose.model('Signup',signupSchema,'signup')
exports.stateschema=mongoose.model('statesdata',stateschema,'statesdata');
exports.finalsignup=mongoose.model('signupfinal',finalsignup,'signupnew');
exports.bookingdata=mongoose.model("booking",bookingdata,"booking")