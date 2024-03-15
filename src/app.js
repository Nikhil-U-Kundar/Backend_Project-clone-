import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";

const app=express();

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit:"16kb"})) //data comes from form
app.use(express.urlencoded({extended:true,limit:"16kb"})) //data comes from url
app.use(express.static("public"));//data from pdf and images

app.use(cookieParser())

export default app;