import express from 'express';
import jwt from 'jsonwebtoken'
import { getUserByEmail } from '../repository/userRepository.js';



const authMiddleware=(req,res,next)=>{
     if (!req.headers.authorization) {
        return res.status(401).send('Authorization header missing');
    }

    else if (!req.headers.authorization.startsWith('Bearer ')) 
        {
             return res.status(401).send('Invalid authorization format it does not start with Bearer');
        }
    else {
        const token = req.headers.authorization.split(' ')[1];
        try {
                const decoded = jwt.verify(token, process.env.JWT_SECRET);
                console.log(decoded);
                req.user = decoded;
                next();
           } catch (err) {
            console.log(err);
             return res.status(401).send('Invalid or expired token');
        }
    }

}

export default authMiddleware
