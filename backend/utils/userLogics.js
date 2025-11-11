import express from 'express';
import validateUserSignUpSchema from '../validations/userVadidations.js';
import { getUserByEmail, createUser,getAllUsers } from '../repository/userRepository.js';
import { generateHashedPassword } from './passwordLogic.js';
import {generateJwtToken} from './jwtTokenLogic.js'

const handleSignup =async (userData) => {
    try {
      const validationResult =   validateUserSignUpSchema.parse(userData);
        if(validationResult){
        const {email,name, password} = validationResult;
        
        
        const checkUserExists = await getUserByEmail(userData.email);
        if(checkUserExists){
            console.log('User already exists with this email');
            return null;
        }

        const {salt, password: hashedPassword} = await generateHashedPassword(password);
        return await createUser({name, email, password: hashedPassword}, salt);   
    }
        else  console.log('Validation failed:', validationResult.errors);
    }



    catch (error) {
    console.error('Validation failed:', error);
}
};

const handleLogin = async (req) =>{
    try{
    const user = await getUserByEmail(req.body.email);
    if(user)
    {
        
    const{salt ,password : hashedPassword} = await generateHashedPassword(req.body.password,user.salt);
    //console.log(user.password + "   " + hashedPassword);
        if(user.password === hashedPassword)
        {
         const token =  await generateJwtToken(user);
        // console.log(`jwt token is ${token}`);
         return token;
        }
    }
    else
    {
        console.log("here in else")
        return;
    }
}
catch(error)
{
    console.log(error);
}

}

const handleGetUsers=async ()=>{
    const users = await  getAllUsers();
    return users;
}

export { handleSignup,handleLogin,handleGetUsers };

