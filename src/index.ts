import express, {Request, Response} from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoute from "./Routes/UserRoute";
import { v2 as cloudinary } from "cloudinary";
import RestaurantRoute from "./Routes/RestaurantRoute";
import searchRestaurantRoute from "./Routes/SearchRestaurantRoute";
import orderRoute from "./Routes/OrderRoute";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)
.then(()=> console.log("Connected To MongoDB!"));

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET,
});

const app = express();
app.use(express.json())
app.use(cors())

app.get("/health", async(req:Request, res:Response)=>{
    res.send({message:"Health OK!"});
});

app.use("/api/my/user", myUserRoute);
app.use("/api/my/restaurant",RestaurantRoute);
app.use("/api/restaurant", searchRestaurantRoute); //Its a public route, user doesnt have to be logged in to use it.
app.use("/api/order", orderRoute);

app.get("/test", async (req: Request, res: Response)=>{
     res.json({message: "Hello!"});
});

app.listen(5000, ()=>{
    console.log("listening on port 5000");
});