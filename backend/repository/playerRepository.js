import  db  from '../db/index.js';
import { playerTable } from '../db/playerModel.js';
import { eq } from 'drizzle-orm';  
import crypto from 'crypto'; 


export const getAllPlayers = async ()=>{
    const players = await db.select({id: playerTable.id,name: playerTable.name,
    age: playerTable.age,
    role: playerTable.playeRole}).from(playerTable);
    //console.log(`here is fetched players + ${players}`);
    return players;
}

