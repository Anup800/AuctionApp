import express from 'express';
import userRouter from './routes/userRoutes.js';   
import env from 'dotenv/config';
import cors from 'cors';



const app = express();
const port = process.env.PORT || 3000;
app.use(cors({
    origin: "http://localhost:5173", 
  methods: ["GET", "POST", "PUT", "DELETE"],
}));

app.use(express.json());

app.use('/user',userRouter, (req, res)=>{
    res.send('Hello World!');
})

app.listen(port,()=>{
    console.log(`Sever running at ${port}`);
})