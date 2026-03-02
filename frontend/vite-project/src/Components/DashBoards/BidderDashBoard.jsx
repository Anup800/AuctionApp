import React,{useState} from 'react'
import io from "socket.io-client";
import PlayerCard from '../Body/PlayerCard';
import BidBox from '../Body/BidBox';
import './PlayerCard.css'

const socket = io("http://localhost:8000");
function BidderDashBoard() {
    const name = localStorage.getItem("name");
      const [messages, setMessages] = useState([{}]);
        const [player,setPlayer]= useState({});
        const [amount,setAmount] = useState(100);
        const [bid,setBid] = useState(0);
    socket.on("message", (userMessage) => {
      console.log("Received message:", userMessage);
      setMessages((prev) => [...prev, { text: userMessage.message, sender: userMessage.name }]);
    });
    socket.on("player-detail", (player) => {
      console.log("Received message for player:", player);
      setPlayer(player);
    }); 
    socket.on("bid-amount",(amount)=>{
        alert("new bid amount - ", amount);
        setAmount(amount);
    })
    const handleBid =()=>{
        const currentBid = Number(bid) + Number(amount);
        setAmount(currentBid);
        socket.emit("bid-amount", currentBid);
    }
  return (
    <>

    <div><BidBox amount={amount}/><div>
       {
        <PlayerCard player={player} />
      } 
    </div></div>
    <div>Let's Bid  {name}</div>
    <input type='number' onChange={(e)=>setBid(e.target.value)}/> 
    <button onClick={handleBid}>Add BID</button>
    <div >
         {messages.map((m, i) => (
          <p key={i}>
            <strong>{m.sender}:</strong> {m.text}
          </p>
        
     ))}
    </div>
    </>
  )
}

export default BidderDashBoard