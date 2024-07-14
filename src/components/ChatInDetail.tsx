import img from '../assets/wallpaper.png';
import SenderChatCard from './SenderChatCard';
import RecieverChatCard from './RecieverChatCard';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Inputbox from './Inputbox';
import Header from './Header';

interface Chat {
  sender_id: number;
  message: string;
}

export default function ChatInDetail() {
  const divStyle = {
    backgroundImage: `url(${img})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    overflow: "auto",
    height: '85vh',
    padding: '20px',  
  };

  const [chat, setChat] = useState<Chat[]>([]);

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const res = await axios.get("https://devapi.beyondchats.com/api/get_chat_messages?chat_id=3888");
        const wholedata = res.data;
        const data = wholedata.data;
        console.log("Fetched data:", data);
        setChat(data);
      } catch (error) {
        console.error('Error fetching chats:', error);
      }
    };
    fetchChats();
  }, []);

  return (
    <div>
      <Header />
      <div style={divStyle}>
        {chat.map((chatd, index) => (
          <div key={index}>
            {chatd.sender_id === 1 ? (
              <RecieverChatCard message={chatd.message} />
            ) : (
              <SenderChatCard message={chatd.message} />
            )}
          </div>
        ))}
      </div>
      <Inputbox />
    </div>
  );
}
