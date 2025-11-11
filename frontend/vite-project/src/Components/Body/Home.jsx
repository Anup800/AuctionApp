import React from 'react'
import { useState } from 'react'
import axios from 'axios';

function Home() {
  const [users,setUsers]= useState([]);
    const token = localStorage.getItem("authToken");
const handleClick=async (e)=>{
  e.preventDefault();
 const res  =  await axios.get('http://localhost:8000/user/getallusers',{
  headers: {Authorization :`Bearer ${token}`},
 })
 setUsers(res.data);
}

  return (
    <div>Home
      <button onClick={(e)=>{handleClick(e)}}>Get ALL users </button>
       <ul>
      {users.map((user, index) => (
        <li key={index} style={{ color: 'white' }}>
          {user.name} — {user.email}
        </li>
      ))}
    </ul>
    </div>
  )
}

export default Home