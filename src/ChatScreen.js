import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./ChatScreen.css";

const ChatScreen = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Brock",
      image: "https://material-ui.com//static/images/avatar/2.jpg",
      message: "Hey whats up",
    },
    {
      name: "Brock",
      image: "https://material-ui.com//static/images/avatar/2.jpg",
      message: "Hows it going",
    },
    {
      message: "Hi! How are you Brock",
    },
  ]);
  const handleSend = (e)=>{
      e.preventDefault();
      setMessages([...messages,{message:input}])
      setInput('')
  }
  return (
    <div>
      <p className="chatScreen_timestamp">
        YOU MATCHED WITH BROCK ON 09/06/21
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen_message">
            <Avatar
              alt={message.name}
              className="chatScreen_image"
              src={message.image}
            ></Avatar>
            <p className="chatScreen_text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen_message">
            <p className="chatScreen_textUser">{message.message}</p>
          </div>
        )
      )}
      <div>
        <form className="chatScreen_input">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="chatScreen_inputField"
            placeholder="Type a message ..."
            type="text"
          />
          <button type="submit" onClick={handleSend} className="chatScreen_inputButton">SEND</button>
        </form>
      </div>
    </div>
  );
};

export default ChatScreen;
