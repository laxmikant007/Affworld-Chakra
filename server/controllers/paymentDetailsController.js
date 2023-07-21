import paymentDetailsModel from "../models/paymentDetailsModel.js"

export const paymentDetailsController =async(req , res )  =>{
    try {
        const {userId , account , nameBeni , BankAddress , beniAddress } = req.body
        console.log(userId);
        // validation 
        if(!userId){
            return res.send({error: 'USerID is Required'})
            // console.log("useridbloack")
        }
        if(!account){
            return res.send({error: 'Account is Required'})
        }
        if(!nameBeni){
            return res.send({error: 'Name is Required'})
        }
      
        if(!BankAddress){
            return res.send({error: 'Address is Required'})
        }
        if(!beniAddress){
            return res.send({error: 'Address is Required'})
        }



        const paymentDetails  = await new paymentDetailsModel({userId, account , nameBeni , BankAddress , beniAddress }).save();

        res.status(201).send({
            success:true,
            message:"Payment Details saved Success!",
            paymentDetails
        })

        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:"Error while saving payment info..",
            error
        })
    }
}

export const getPaymentDetails = async(req,res)=>{
    try {
        console.log("id ", req.params.id)
        const data= await paymentDetailsModel.find({userId:req.params.id});
        res.status(200).json(data);



        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:"Error while getting payment info..",
            error
        })
    }
}