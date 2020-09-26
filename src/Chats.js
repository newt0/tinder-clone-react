import React from "react";
import Chat from "./Chat";
import "./Chats.css";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Katopan"
        message="Hi! I'm so beautiful"
        timestamp="1 seconds ago"
        profilePic="http://www.japanmusic.jp/%E5%8A%A0%E8%97%A4%E7%B6%BE%E5%AD%902019.jpg"
      />
      <Chat
        name="Katopan"
        message="Hi! I'm so beautiful"
        timestamp="1 seconds ago"
        profilePic="http://www.japanmusic.jp/%E5%8A%A0%E8%97%A4%E7%B6%BE%E5%AD%902019.jpg"
      />
      <Chat
        name="Katopan"
        message="Hi! I'm so beautiful"
        timestamp="1 seconds ago"
        profilePic="http://www.japanmusic.jp/%E5%8A%A0%E8%97%A4%E7%B6%BE%E5%AD%902019.jpg"
      />
    </div>
  );
}

export default Chats;
