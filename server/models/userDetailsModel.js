import mongoose from "mongoose";

const userDetailsSchema = new mongoose.Schema(
    {
        userId:{
            type:String,
            unique: true,


            
        },
        affilate: {
            type: Number,
            required: [true, "please Affilate ID"],

           
        },
        nameBeni: {
            type: String,
            required: [true, "please provide First Name"],
           
        },
        last:{
            type:String
            // required: [true, "please provide Last Name"],


        },
        username: {
            type: String,
            required: [true, "Please User Name"],
            minlength: 8,
            trim: true,
        },
        companyName: {
            type: String,
            default: "Affworld Technologies!",
            minlength: 2,
            maxlength: 250,
        },
        phoneNumber:{
            type:Number,
            required: [true, "please Phone Number"],
        },
        address1:{
            type:String,
            default:"Jaipur"
        },
        address2:{
            type:String,
            default:"Mansarover"
        },
        age:{
            type:Number,
            required: [true, "please Valid Age"],
        },
        skype:{
            type:String,
            default:"Skype34asd"
        },
        postCode:{
            type:Number,
            default:"334603"
        },
        state:{
            type:String,
            required: [true, "please Provide Valid State"],


        },
        city:{
            type:String,
            default:"Jaipur"
        }
    },
    {timestamps:true}

)

export default mongoose.model("UserDetails", userDetailsSchema);
