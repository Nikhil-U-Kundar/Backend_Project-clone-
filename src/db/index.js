import mongoose from "mongoose";
import {dbname} from "../constants.js";

const connectdb = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${dbname}`);
        console.log(`\nMongoDB connected!! Host: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("mongoose connection error:", error);
        process.exit(1);
    }
};

export default connectdb;