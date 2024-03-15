// require('dotenv').config({ path: './env' })

import dotenv from "dotenv"
import connectdb from "./db/index.js";

dotenv.config({ path: './env' })


connectdb()   ///taken from index.js of db file
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`server is running at${process.env.PORT}`)
    })
})
.catch((error)=>{
    console.log("mongo db connection failed",error)
})



























// import  Express  from "express";
// const app=express();
// // process of connecting to the db
// ( async ()=>{
//    try{
//   await mongoose.connect(`${process.env.mongodb_url}/$
//   {dbname}`)
//   app.on("error",(error)=>{
//     console.log("err",error);
//     throw error
//   })
//   app.listen(process.env.PORT,()=>{
//     console.log(`app is listining at ${process.env.PORT}`);
//   })
//    }catch(error){
//     console.log("error: ",error)
//     throw err
//    }
// })()