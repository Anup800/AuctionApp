import {drizzle} from "drizzle-orm/node-postgres";
import 'dotenv/config';



const db = drizzle(process.env.DATABASE_URL);
export default db;

export {userTable} from "./userModel.js";
export {playerTable} from "./playerModel.js";
export {teamTable} from "./teamModel.js";
