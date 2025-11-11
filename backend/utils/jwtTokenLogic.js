import jwt from 'jsonwebtoken';
const jwtSecret = process.env.JWT_SECRET;
//import {userJwtValidationSchema} from '../validations/jwt.validation.js';


export async function generateJwtToken(user) {
    //const isValid = userJwtValidationSchema.safeParse({id: user.id, email: user.email});
    // if(!isValid.success){
    //     throw new Error('Invalid user data for token generation');
    // }
    console.log("jwt token geneartor");
    const payload = { userId: user.id, email: user.email ,role: user.userRole};
    const token =  jwt.sign(payload,jwtSecret, { expiresIn: '1h' });
    return token;
}
export function verifyToken(token) {
    try {
        const decoded = jwt.verify(token, jwtSecret);
        return decoded;
    } catch (err) {
        throw new Error('Invalid or expired token');
    }
}