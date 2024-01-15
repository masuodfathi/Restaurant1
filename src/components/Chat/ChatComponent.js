import React, { useState } from "react";
import "./Chat.css";

const ChatComponent = (props) => {
  const [conversation, setConversation] = useState([]);
  const [inputText, setInputText] = useState();
  const [visability, setVisability] = useState(false);

  const toggleChat = () => {
    setVisability(!visability);
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSendMessage = async () => {
    setConversation([...conversation, { role: "user", content: inputText }]);
    const apiKey = "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";
    const apiUrl = "https://api.openai.com/v1/chat/completions";

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [...conversation, { role: "user", content: inputText }],
      }),
    });

    const responseData = await response.json();
    const newMessage = responseData.choices[0].message.content;

    setConversation([
      ...conversation,
      { role: "user", content: inputText },
      { role: "assistant", content: newMessage },
    ]);
    setInputText("");
  };

  return (
    <div className="chat">
      <div className="chat-header">
        <button onClick={toggleChat}>Toggle Chat</button>
      </div>

      
        <div
          className={`${
            visability ? "chat-container visible" : "chat-container"
          }`}
        >
          {conversation.map((message, index) => (
            <div key={index} className={message.role + " message"}>
              <p>{message.content}</p>
            </div>
          ))}
        </div>

      <div className="chat-footer">
        <input type="text" value={inputText} onChange={handleInputChange} />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatComponent;
