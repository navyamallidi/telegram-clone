import { useState, useEffect } from "react";
import ChatBox from "./ChatBox";
import axios from "axios";

interface Chat {
  created_at: string;
  creator: {
    name?: string | null;
  };
}

export default function Chats() {
  const [chats, setChats] = useState<Chat[]>([]);

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const res = await axios.get("https://devapi.beyondchats.com/api/get_all_chats?page=1");
        const wholedata = res.data;
        const data = wholedata.data.data;
        console.log("Fetched data:", data);
        setChats(data);
      } catch (error) {
        console.error('Error fetching chats:', error);
      }
    };

    fetchChats();
  }, []);

  return (
    <div style={{ height: "90vh", overflowY: "auto", overflowX:"hidden" }}>
      {chats.map((chat, index) => (
        <div key={index} className="mt-3">
          <ChatBox date={chat.created_at} name={chat.creator.name || "Unknown"} />
        </div>
      ))}
    </div>
  );
}
