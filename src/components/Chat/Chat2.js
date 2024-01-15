// ChatComponent.js

import React, { useState } from 'react';
import axios from 'axios';
import './ChatComponent.css'; // Import the CSS file

function ChatComponent() {
  const [conversation, setConversation] = useState([]);
  const [inputText, setInputText] = useState('');
  const [chatVisible, setChatVisible] = useState(false);
  const [isWaitingForResponse, setIsWaitingForResponse] = useState(false);

  const toggleChatVisibility = () => {
    setChatVisible(!chatVisible);
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSendMessage = async () => {
    const apiKey = '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';
    const apiUrl = 'https://api.openai.com/v1/chat/completions';

    setIsWaitingForResponse(true);

    const userMessage = { role: 'user', content: inputText };
    const conversationCopy = [...conversation, userMessage];
    setConversation(conversationCopy);
    setInputText('');

    try {
      const response = await axios.post(apiUrl, {
        model: 'gpt-3.5-turbo',
        messages: conversationCopy,
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        }
      });

      const aiMessage = response.data.choices[0].message;
      setConversation([...conversationCopy, aiMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
    }

    setIsWaitingForResponse(false);
  };

  return (
    <div>
      {/* Chat box visibility toggle */}
      <button onClick={toggleChatVisibility}>
        Toggle Chat
      </button>

      {/* Chat box container */}
      <div className={`chat-container ${chatVisible ? 'visible' : ''}`}>
        {conversation.map((message, index) => (
          <div key={index} className={`message ${message.role}`}>
            {message.content}
          </div>
        ))}

        {/* Loading indicator for AI response */}
        {isWaitingForResponse && <div className="loading">AI is typing...</div>}

        {/* Input box */}
        <div className="input-container">
          <input
            type="text"
            className="input-box"
            value={inputText}
            onChange={handleInputChange}
          />
          <button
            className="send-button"
            onClick={handleSendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatComponent;
