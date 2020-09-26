import React, { useState, useEffect } from "react";
import "./ChatScreen.css";
import { Avatar } from "@material-ui/core";

function ChatScreen() {
  const [input, setInput] = useState("");
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
      message: "OK!",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };

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

      <div>
        <form className="chatScreen__input">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="chatScreen__inputField"
            type="text"
            placeholder="Type a message"
          />
          <button
            onClick={handleSend}
            className="chatScreen__inputButton"
            type="send"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatScreen;
