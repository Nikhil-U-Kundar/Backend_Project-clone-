import mongoose,{Schema} from "mongoose"
import mongooseaggregatepaginate from "mongoose-aggregate-paginate-v2"


const vedioSchema =new Schema({
vediofile:{
    type:String,
    required:true,
},
thumbnail:{
    type:String,
    required:true,    
},
tittle:{
    type:String,
    required:true,
},
discription:{
    type:String,
    required:true,
},
duration:{
    type:Number,
    required:true,
},
views:{
    type:Number,
    default:0,
},
published:{
    type:Boolean,
    default:true,
},
owner:{
    type:Schema.Types.ObjectId,
    ref:"user",
}


},{timestamps:true})



vedioSchema.plugin(mongooseaggregatepaginate)  //because it is came later so we are using this plugins
export const vedioschema=mongoose.model("vedio",vedioSchema)