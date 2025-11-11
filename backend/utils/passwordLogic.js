import crypto from 'crypto';
import { createHmac } from 'crypto';



const generateHashedPassword =  (password,userSalt = undefined) => {
const salt = userSalt ?? crypto.randomBytes(16).toString('hex');
    const hashedPassword = createHmac('sha256', salt).update(password).digest('hex');
    console.log(`Generated hashed password: ${salt} hashedPassword - ${hashedPassword}`);
    return  {salt, password : hashedPassword};
}



export { generateHashedPassword };