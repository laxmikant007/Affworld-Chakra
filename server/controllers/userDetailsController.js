import userDetailsModel from "../models/userDetailsModel.js";

export const userDetailsController =async(req , res )  =>{
    try {
        const {userId , affilate , nameBeni , last , username ,companyName , postCode ,phoneNumber ,   state ,city ,address2 ,address1 , age , skype  , } = req.body
        console.log(userId);
        // validation 
        if(!userId){
            return res.send({error: 'USerID is Required'})
            // console.log("useridbloack")
        }
        if(!affilate){
            return res.send({error: 'Affilate id is Required'})
        }
        if(!nameBeni){
            return res.send({error: 'Name is Required'})
        }
      
        if(!last){
            return res.send({error: 'Last Name is Required'})
        }
        if(!username){
            return res.send({error: 'User Name is Required'})
        }
        if(!companyName){
            return res.send({error: 'Company Name is Required'})
        }
        if(!phoneNumber){
            return res.send({error: 'Phone  is Required'})
        }
        if(!state){
            return res.send({error: 'State is Required'})
        }
        if(!city){
            return res.send({error: 'City is Required'})
        }



        const userDetails  = await new userDetailsModel({userId, affilate , nameBeni , username , companyName, phoneNumber,address2, address1, age  , skype, postCode ,state , city}).save();

        res.status(201).send({
            success:true,
            message:"User Details saved Success!",
            userDetails
        })

        
    } catch (error) {
        console.log("This is error in userDetailsController-->" , error);
        res.status(500).send({
            success:false,
            message:"Error while saving User Details info..",
            error
        })
    }
}