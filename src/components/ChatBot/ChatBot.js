import React, {useState} from 'react';
import './ChatBot.css';
import sendIcon from './Icon/send.svg';
import chatIcon from './Icon/Chat.svg';
import chatBotService from './ChatBotService';
import Messages from './Messages';

const ChatBot = () => {

  const [messages, setMessages] = useState([
    { from: "bot", text: {message: "Hi, My Name is Shubham", url: "", type: "", action: []}},
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleChat = () => {
    setIsChatOpen(!isChatOpen);
  }

  const inputChange = (event) => {
    setInputMessage(event.target.value);
  }

  const handleSendButton = () => {
    if(!inputMessage.trim().length) {
      return;
    }
    renderChatBody(inputMessage, "user");
    getChatBotResponse(inputMessage);
    setInputMessage("");
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      if(!inputMessage.trim().length) {
        return;
      }
      renderChatBody(inputMessage, "user");
      getChatBotResponse(inputMessage);
      setInputMessage("");
    }
  }

  const handleActionMessage = (inputMessage) => {
    renderChatBody(inputMessage, "user");
    getChatBotResponse(inputMessage);
    setInputMessage("");
  }

  const renderChatBody = (text, type) => {
    if (type === "user") { 
      setMessages((old) => [...old, { from: "user", text: text }]);
    } else {
      setTimeout(() => {
        setMessages((old) => [...old, { from: "bot", text: text }]);
      }, 200);
    }
  };

  const getChatBotResponse = (userInput) => {
    chatBotService.getResponce(userInput).then((response) => {
      console.log("botResponse>>",response)

      if (response === undefined) {
        response = "Please try something else";
      }
      renderChatBody(response, "bot");
    }).catch((error) => {
      // Bot response error
      console.log("Bot response error", error);
    });
  };
  
  return (
    <>
      <div onClick={handleChat} className={isChatOpen ? 'collapse' : ''}>
        <div className="chat-icon">
          <img src={chatIcon} alt="Chat Icon" />
        </div>
      </div>
      <div className={isChatOpen ? 'chat-container' : 'collapse'}>
        <div className="chat-header" onClick={handleChat}>
          <div className="logo">
            <img src={chatIcon} alt="Chat Icon" />
          </div>
          <div className="title">Chat</div>
        </div>
        <div className="chat-body">
          <Messages messages={messages} handleActionMessage={handleActionMessage} />
        </div>
        <div className="chat-input">
          <div className="input-sec">
            <input 
              type="text" 
              value={inputMessage}
              id="chatInput"
              placeholder="Type the message ..."
              autoComplete="off"
              autoFocus={true}
              onKeyDown={ handleKeyDown }
              onChange={ inputChange }
            />
          </div>
          <div className="send" onClick={ handleSendButton } >
            <img src={sendIcon} alt="send" />
          </div>
        </div>
      </div>
    </>
  )
}
export default ChatBot;