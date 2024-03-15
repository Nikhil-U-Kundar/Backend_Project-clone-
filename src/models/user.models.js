import mongoose, {Schema} from "mongoose";
import bcrypt from "bcrypt"
import jsonwebtoken from "jsonwebtoken"

const userSchema =new Schema(
    {
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
    },
    fullname:{
        type:String,
        required:true,
        lowercase:true,
        trim:true,
    },
    avatar:{
        type:String, ///cloudinary url
        required:true,
    },
    coverimage:{
        type:String,
    },
    watchhistory:[
        {
            type:Schema.Types.ObjectId,
            ref:"vedio"
        }
    ],
    password:{
        type:String,
        required:[true,"password is required"]
    },
    refreshtoken:{
        type:String
    }
},
{timestamps:true}
)


userSchema.pre("save", async function (next){
    if(!this.isModified("password")) return next();

    this.password = bcrypt.hash(this.password,10)
    next()
})

userSchema.methods.ispasswordCorrect =async function(password){
    return await bcrypt.compare(password,this.password)
}

// model--1

userSchema.methods.generateAcessToken =function(){
    return Jwt.sign({
        _id: this._id,
        email: this.email,
        username: this.username,
        fullname:this.fullname
},
process.env.ACESS_TOKEN_SECRET,
{
    expiresIn: process.env.ACESS_TOKEN_EXPIRY
}
)
}

// model--2

userSchema.methods.generateRefreshToken =function()
{
    return Jwt.sign({
        _id: this._id,  //_id ---- is takes direct dat from monogo_db
},
process.env.REFRESH_TOKEN_SECRET,
{
    expiresIn: process.env.REFRESH_TOKEN_EXPIRY
}
)
}

export const user =mongoose("user",userSchema)