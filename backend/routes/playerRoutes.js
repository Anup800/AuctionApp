import express from 'express'
import { getAllPlayers } from '../repository/playerRepository.js';

export const playerRouter = express.Router();

 playerRouter.get('/',async (req, res)=>{
    const players = await getAllPlayers();
    console.log("here is players Route");
    console.log(players);
    res.send(players).status(201);
 })