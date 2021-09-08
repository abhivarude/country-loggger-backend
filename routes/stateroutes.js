const express=require("express");
const router=express.Router();
const {stateschema}=require("../shared/urlschema")



router.post("/states",async(req,res)=>{

// Country.LocalizedName":"Bangladesh"
    // .then(response => {
   const data=await stateschema.findOne(req.body)


   res.send(data);
   



})

router.get("/alldata",async(req,res)=>{


    const data1=await  stateschema.find();
    res.send(data1);
})
 module.exports=router;

