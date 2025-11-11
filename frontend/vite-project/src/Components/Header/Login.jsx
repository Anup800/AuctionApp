import React from 'react'
import './signup.css'
import axios from 'axios'
import { useState } from 'react'
import {jwtDecode } from 'jwt-decode'
import { useNavigate  } from 'react-router-dom'


function Login() {
  const navigate = useNavigate();
  const[email,setEmail]= useState('email');
  const [password,setPassword]= useState('enter ypur password');
 const onLogin = async (e)=>{
   e.preventDefault();
   const resData = await axios.post('http://localhost:8000/user/login',{
    email,password
   });
   const token = resData.data;
   console.log(token );
   const decodeResult = jwtDecode(token);
   localStorage.setItem("role",decodeResult.role)
   const role = decodeResult.role;
   localStorage.setItem("authToken",token);
   if(role === "admin") navigate("/admin");
   else navigate("/bidder");
 }
  return (
    <div>
        <h4>Login </h4>
        <form>
            <ul>
            <li>
            <label>UserEmail:</label>
            <input type="text" name="email" required  onChange={(e)=>{setEmail(e.target.value)}}/>
            </li>
            <li>
            <label>Password:</label>
            <input type="password" name="password" required  onChange={(e)=>{setPassword(e.target.value)}}/>
            <button type="submit" on onClick={ (e)=>{onLogin(e)}}>Login</button>
          </li>
            </ul>
        </form>

    </div>
  )
}

export default Login

