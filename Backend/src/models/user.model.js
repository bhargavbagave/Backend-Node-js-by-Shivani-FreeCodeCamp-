import mongoose, {Schema} from "mongoose";

const userSchema = new Schema( 
    {
        username: {
            type: String,
            required: true,
            lowercase: true,
            unique: true,
            trim: true,
            minLength: 1,
            maxLength: 20
        },

        password: {
            type: String,
            minLength: 6,
            maxLength: 20,
            required: true
        },

        emailId: {
            type: String,
            required: true,
            unique: true,
            trim: true,

        }
    },

    {
        timestamp:true
    }
)

export const User = mongoose.model("User",userSchema)