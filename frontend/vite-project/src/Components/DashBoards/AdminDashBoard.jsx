import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import PlayerCard from "../Body/PlayerCard";
import axios from "axios";
import BidBox from "../Body/BidBox";
import './PlayerCard.css'



const socket = io("http://localhost:8000");

function AdminDashBoard() {
  const [message, setMessage] = useState(""); // current message being typed
  const [messages, setMessages] = useState([]);
  const name = localStorage.getItem("name");
  const [players,setPlayers] = useState([]);
  const [currentIndex,setCurrentIndex]= useState(0);
 const [bidAmount, setBidAmount] = useState(0);

const token = localStorage.getItem("authToken");
  useEffect( () => {

const fetchPlayers = async () => {
    try {
      const res = await axios.get("http://localhost:8000/player", {
        headers: { Authorization: `Bearer ${token}` },
      });

      console.log(res.data);
      setPlayers(res.data);
    } catch (err) {
      console.error("Error fetching players:", err);
    }
  };

  fetchPlayers(); 

    socket.on("connect", () => {
      console.log("Connected to socket:", socket.id);
    });

    socket.on("message", (msg) => {
      console.log("Received message:", msg);
      setMessages((prev) => [...prev, { text: msg, sender: "Other" }]);
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from socket server");
    });
    socket.on("bid-amount",(amount)=>{
        setBidAmount(amount);
    })

    return () => socket.disconnect();
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message.trim() === "") return;

    // Send to server
    const userMessage= {name :name,
        message :message
    }
    socket.emit("user-Message",(userMessage));

    // Add to local message list
    setMessages((prev) => [...prev, { text: message, sender: name }]);

    setMessage(""); // clear input
  };
  const goPrev = ()=>{
    const cI = currentIndex;
    const index = cI >0 ?cI-1: players.length-1;
    setCurrentIndex(index);
  
  socket.emit("palyer-detail",players[index])
  }
  const goNext=()=>{
    const cI = currentIndex;
    const index = cI < players.length-1 ? Number(cI+1) :0;
    setCurrentIndex(index);
  socket.emit("palyer-detail",players[index])
  }
  return (
    <div style={{ padding: "20px" }}>
      <h2>Admin Dashboard</h2>
     <div> <BidBox amount={bidAmount}/></div>
     <div className="PalyerCard">
       {players.length > 0 && (
        <PlayerCard player={players[currentIndex]} />
      )}
    </div>
    
      <button onClick ={goNext}>Prev</button>
      <button onClick={goPrev}>Next</button>
      <label>ChatBox</label>
      <br />
      <input
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>

      {/* Show messages */}
      <div style={{ marginTop: "20px", borderTop: "1px solid #ccc" }}>
        {messages.map((m, i) => (
          <p key={i}>
            <strong>{m.sender}:</strong> {m.text}
          </p>
        ))}
        
      </div>
      
    </div>
  );
}

export default AdminDashBoard;
