const joi=require("joi");

const sigupvalidation=(data)=>{

const validationschema=joi.object(
    {
       

        name:joi.string().min(5).required(),
        email:joi.string().min(6).email().required(),
        password:joi.string().min(5).max(12).required()

    }
)

return validationschema.validate(data)

}


const loginvalidation=(data)=>{

const lvalidationschema=joi.object({


    name:joi.string().min(5).required(),
    email:joi.string().email().required(),
    data:joi.string().min(5).required()

})

return lvalidationschema.validate(data);

}


const loginbodyvalidation=(data)=>{

    const validation=joi.object({
        email:joi.string().min(6).email().required(),
        password:joi.string().min(5).max(12).required()
    })
return validation.validate(data)
}

module.exports={sigupvalidation,loginvalidation,loginbodyvalidation}