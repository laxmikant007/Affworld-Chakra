import mongoose from "mongoose";

const paymentDetailsSchema = new mongoose.Schema(
    {
        userId:{
            type:String,
            // default:"Userid23456",
            // required: [true, "Please Provide USERID"],
        },
        account: {
            type: Number,
            required: [true, "Please Provide Account Number"],
            trim: true,
            minlength: 4,
        },
        nameBeni: {
            type: String,
            required: [true, "please provide Beneficiary Name"],
            // unique:true
           
        },
        BankAddress: {
            type: String,
            required: [true, "please provide Bank Address"],

        },
        beniAddress: {
            type: String,
            required: [true, "Please Provide Beneficiary Address"],
            
            
        },
        sortCode: {
            type: String,
            default: "Hello There!",
            minlength: 2,
            maxlength: 250,
        },
        iBan: {
            type: String,
            default: "Hello There!",
            minlength: 2,
            maxlength: 250,
        },
        swift: {
            type: String,
            default: "Hello There!",
            minlength: 2,
            maxlength: 250,
        },
        role: {
            type: String,
            default: "Hello There!",
            minlength: 2,
            maxlength: 250,
        },
    },
    {timestamps:true}

)

export default mongoose.model("paymentDetails", paymentDetailsSchema);
