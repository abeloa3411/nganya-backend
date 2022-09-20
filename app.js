import express from "express";
import auth from "./routes/auth.js";
import cors from "cors";

const app = express();
const PORT = 5000;
app.use(cors());

app.use(express.json());
// app.get("/",(req,res)=>{
//     res.send('Going on well here')
// })

app.use("/api/auth", auth);

app.listen(PORT, () => console.log(`Server is running on port ${PORT} ...`));
