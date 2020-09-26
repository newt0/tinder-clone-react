import React, { useState } from "react";
import "./ChatScreen.css";
import { Avatar } from "@material-ui/core";

function ChatScreen() {
  const [messages, setMessages] = useState([
    {
      name: "yuuki",
      image: "https://columbia.jp/yukiaoi/images/main04.jpg",
      message:
        "Why don't you sign a contract with me and become a magical girl?",
    },
    {
      name: "yuuki",
      image: "https://columbia.jp/yukiaoi/images/main04.jpg",
      message:
        "Why don't you sign a contract with me and become a magical girl?",
    },
    {
      // name: "yuuki",
      // image: "https://columbia.jp/yukiaoi/images/main04.jpg",
      message:
        "OK!",
    },
  ]);
  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        You matched with yuuki on 2020/09/25
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chat__image"
              src={message.image}
              alt={message.name}
            />
            <p className="chatScreen__text">{message.message}</p>{" "}
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message} </p>
          </div>
        )
      )}
    </div>
  );
}

export default ChatScreen;
