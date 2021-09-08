const express=require("express");
const router=express.Router();
const bcrypt=require("bcrypt");

const {signupSchema}=require("../shared/urlschema");
const{sigupvalidation,loginvalidation}=require("./authenticate")

// router.post("/signup",async (req,res)=>{


// const {error}=sigupvalidation(req.body);
// if(error)
// {

//     res.status(400).send({msg:error.details[0].message})

// }
// try {
//     const logincheak=await signupSchema.findOne({email:req.body.email})
//     if(logincheak)
//     {
//         return  res.status(201).send({msg:"email alerady exists"})

//     }


//     const salt=await bcrypt.genSalt(10);
// req.body.password=await bcrypt.hash(req.body.password,salt);




// signup1= new signupSchema({

//     name:req.body.name,
//     email:req.body.email,
//     password:req.body.password
// })

// await signup1.save();
// res.json(signup1)
// }
// catch(error){

//     console.log(error);
// }


// })

router.post("/login",async(req,res)=>{
try{

    const {error}=loginvalidation(req.body);
    if(error)
    {
    
        res.status(400).send({msg:error.details[0].message})
    
    }


    const logincheak=await signupSchema.findOne({email:req.body.email})

    if(logincheak)
    {
      return  res.status(200).send({msg:"email already exists"})
    }
    else{
        signup=new signupSchema({
            name:req.body.name,
             email:req.body.email,
             data:req.body.data
          })
        
         await signup.save();
        res.json(signup);
        
        return res.status(200).send("reply saved")}
    
 


}

catch(error)
{console.log(error);}


})




 


module.exports=router;