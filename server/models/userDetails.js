import mongoose from "mongoose";

const userDetailsSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "Please Provide a Username"],
            trim: true,
            minlength: 4,
        },
        avatar: {
            type: String,
            default: image,
        },
        email: {
            type: String,
            required: [true, "please provide a email"],
            unique: true,
            trim: true,
            validate: {
                validator: validator.isEmail,
                message: "Please Provide Email",
            },
        },
        password: {
            type: String,
            required: [true, "Please Provide Password"],
            minlength: 8,
            trim: true,
        },
        bio: {
            type: String,
            default: "Hello There!",
            minlength: 2,
            maxlength: 250,
        },
    }
)

export default mongoose.model("UserDetails", userDetailsSchema);
