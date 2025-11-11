import express from 'express';
import { handleSignup,handleLogin,handleGetUsers} from '../utils/userLogics.js';
import authMiddleware from '../middleware/authMiddleware.js';


const userRouter = express.Router();

userRouter.get('/getallusers',authMiddleware ,async (req, res) => {
    const users = await handleGetUsers();
    res.status(200).json(users);
});
userRouter.post('/signup', (req, res) => {
    console.log(req.body);
    const newUser = handleSignup(req.body);
    if (!newUser) {
        res.status(400).send('User already exists or validation failed');
        return;
    }
    res.send(`Create a new user with id ${newUser}`);
});

userRouter.post('/login',async  (req, res) => {
    const token = await handleLogin(req);
    if (token)
    {
    res.status(200).json( token);
    }
    else{
        res.status(401).json("Invalid userEmail or password" );
    }

});

export default userRouter;
