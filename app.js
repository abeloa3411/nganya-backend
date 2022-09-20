import express from "express";
import auth from "./routes/auth.js";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();
const PORT = 5000;
app.use(cors());
dotenv.config();

app.use(express.json());
// app.get("/",(req,res)=>{
//     res.send('Going on well here')
// })

app.use("/api/auth", auth);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () =>
      console.log(`Connected to DB and Server is running on port ${PORT} ...`)
    );
  })
  .catch((error) => {
    console.log(error);
  });
