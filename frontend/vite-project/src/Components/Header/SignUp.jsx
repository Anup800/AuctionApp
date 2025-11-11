import React from 'react'
import './signup.css'
import axios from 'axios'


function SignUp() {
 const[name,setName]=React.useState('');
 const[age,setAge]=React.useState(0);
 const[email,setEmail]=React.useState('');
 const[password,setPassword]=React.useState('');

;
const onFormSubmit=(e)=>{
    e.preventDefault();
    
  axios.post('http://localhost:8000/user/signup', {
  name,
  age,
  email,
  password
        })
    .then((res) => {
    console.log(res.data);
    })
    .catch((err) => {
  console.error(err);
});
   console.log(name,age,email,password);
 }
 

    return (
    <div>
        <h4>Sign Up</h4>
        <form>
            <li>
            <ul>
            <label htmlFor="">Name </label>
            <input type="text" placeholder='Name' onChange={(e)=>{setName(e.target.value)}}/>
            </ul>
            <ul>
            <label htmlFor="">Age </label>
            <input type="number" placeholder='Age' onChange={(e)=>{setAge(e.target.value)}}/>
            </ul>
            <ul>
            <label htmlFor="">Email </label>
            <input type="email" placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}}/>
            </ul>
            <ul>
            <label htmlFor="">Password </label>
            <input type="password" placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}}/>
            </ul>
            </li>
            <li>
          
            <button type='submit' onClick={(e)=>{onFormSubmit(e)}}>Register</button>
            </li>
        </form>
    
    </div>
  )
}

export default SignUp