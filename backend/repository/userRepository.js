import  db  from '../db/index.js';
import { userTable } from '../db/userModel.js';
import { eq } from 'drizzle-orm';  
import crypto from 'crypto'; 


const getAllUsers = async ()=>{
    const users = await db.select().from(userTable);
    console.log(`here is fetch users + ${users}`);
    return users;
}

const getUserByEmail = async (email) => {
   const user = await db
  .select()
  .from(userTable)
  .where(eq(userTable.email, email))
  .limit(1);
    return  user[0];
};

const createUser = async (user,salt ) => {
    try{
        const id = crypto.randomUUID();
        const newUser =  await db.insert(userTable).values({
            id: id,
         name: user.name,
        
         age: user.age || 0,
         teamId: user.teamId || null,
         userRole: user.userRole || null,
         amount: user.amount || null,
          email: user.email,
         password: user.password,
         salt: salt
        }).returning();
        console.log('User created successfully:', newUser);
    }
    catch(error){
        console.error('Error creating user:', error);
        return null;
    }

};
export { getUserByEmail, createUser ,getAllUsers};

