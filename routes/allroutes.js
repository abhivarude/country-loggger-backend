const express=require("express");
const router=express.Router();
const bcrypt=require("bcrypt");

const {signupSchema,finalsignup,bookingdata}=require("../shared/urlschema");
const{sigupvalidation,loginvalidation,loginbodyvalidation}=require("./authenticate")

router.post("/signup",async (req,res)=>{

    try {
            const {error}=sigupvalidation(req.body);
            if(error)
                {

                    res.status(400).send({msg:error.details[0].message})

                }
            else{   




                const logincheak=await finalsignup.findOne({email:req.body.email})
                if(logincheak)
                {
                    return  res.status(201).send({msg:"email alerady exists"})

                }


                const salt=await bcrypt.genSalt(10);
               req.body.password=await bcrypt.hash(req.body.password,salt);




                    signup1= new finalsignup({

                        name:req.body.name,
                        email:req.body.email,
                        password:req.body.password,
                                          })

                await signup1.save();
                res.status(200).send({msg:"done"})


       }  
     }
catch(error){

    console.log(error);
}


})

                    router.post("/login",async(req,res)=>{
                    try{

                        const {error}=loginvalidation(req.body);
                        if(error)
                        {
                        
                            res.status(400).send({msg:error.details[0].message})
                        
                        }


                       

                      else{
                       
                            signup=new signupSchema({
                                name:req.body.name,
                                email:req.body.email,
                               data:req.body.data
                            })
                            
                            await signup.save();
                            res.json(signup);
                            
                            return res.status(200);
                      }
                        
                    
                    }

                    catch(error)
                    {console.log(error);}


                    })



                    router.post("/flight",async(req,res)=>{
                        try{
                         
                              
                          
                             data=new bookingdata({
                              flightfrom:req.body.flightfrom1,
                              flightto:req.body.flightto1,
                              bookdate:req.body.bookdate1,
                              trip:req.body.trip1
                             })
                      
                         await data.save();
                         res.json(data);
                         return res.status(200);
                      }
                      catch(error)
                      {
                          console.log(error);
                      }
                         
                      
                      
                      })
                      

 router.post("/loginbody",async(req,res)=>{


    try{
                        const {error}=loginbodyvalidation(req.body);

                        if(error)
                        {
                        return res.status(400).send({msg:error.details[0].message})
                        }
                        const logincheak= await  finalsignup.findOne({email:req.body.email});

                        if(!logincheak)
                        {
                            return  res.status(402).send({msg:"email does not  exists"});
                        }
                        console.log(logincheak)

                        const isvalid= await bcrypt.compare(req.body.password,logincheak.password);
                        if(!isvalid)
                        {
                            return res.status(402).send("password dosen't match");
                        }
                        else{
                            
                            return res.status(200).send("verified user");

                        }
                    }
                    catch(error)
                    {
                        console.log(error);
                    }

 })


router.post("/hotel",async(req,res)=>{
    try{
        
    
           
            let data1=req.body.hoteldata;
          hotel=new bookingdata({
                    email:req.body.email,
                    hotellocation:req.body.hotellocation1,
                    hotelin:req.body.hotelin1,
                    hotelout:req.body.hotelout1
          }) 
           
         await hotel.save();
         res.json(hotel);
                
         return res.status(200);
            
        
    }
    catch(error)
    {
        console.log(error);
    }
       
    
    
    })
    



module.exports=router;