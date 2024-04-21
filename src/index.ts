import express, {Request, Response} from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoute from "./Routes/UserRoute";
mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)
.then(()=> console.log("Connected To MongoDB!"));

const app = express();
app.use(express.json())
app.use(cors())

app.get("/health", async(req:Request, res:Response)=>{
    res.send({message:"Health OK!"});
});

app.use("/api/my/user", myUserRoute);

app.get("/test", async (req: Request, res: Response)=>{
     res.json({message: "Hello!"});
});

app.listen(5000, ()=>{
    console.log("listening on port 5000");
});