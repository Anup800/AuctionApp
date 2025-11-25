import express from 'express';
import authMiddleware from '../middleware/authMiddleware.js';
import { Server } from 'socket.io';



const dashboardRouter = express.Router();


dashboardRouter.get('/' ,async (req, res) => {
   // const users = await handleGetUsers();
    res.status(200).json({"Name" : "dashboard"});
});


export default dashboardRouter;

