import express from "express";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";
import userRouter from "./routes/userRoutes.js";
import dashboardRouter from "./routes/dashboardRoutes.js";
import "dotenv/config";
import { playerRouter } from "./routes/playerRoutes.js";

const app = express();
const server = http.createServer(app); // one unified server
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
  },
});

const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.use('/player',playerRouter)
app.use("/user", userRouter);
app.use("/dashboard", dashboardRouter);

// socket.io setup
io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);
     socket.on("user-Message", (userMessage) => {console.log(`new user message from id ${socket.id}`,userMessage );
     socket.broadcast.emit('message',userMessage); })
     socket.on("palyer-detail",(player) =>{
        console.log("backend received palyer view",player)
     socket.broadcast.emit("palyer-detail",player)});

     socket.on("bid-amount",(amount)=>{
        socket.broadcast.emit(amount);
    })
});


server.listen(port, () => {
  console.log(`Server (HTTP + Socket.IO) running on port ${port}`);
});
