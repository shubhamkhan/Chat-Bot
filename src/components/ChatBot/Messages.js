import React, { useEffect, useRef } from "react";
import userIcon from './Icon/User.svg';
import botIcon from './Icon/Bot.svg';

const Messages = (props) => {
    
  const AlwaysScrollToBottom = () => {
    const elementRef = useRef();
    useEffect(() => elementRef.current.scrollIntoView());
    return <div ref={elementRef} />;
  };

  return (
    <>
      {props.messages.map((item, index) => {
        if (item.from === "bot") {
          return (
            <div className="bot-response-container" key={index}>
                <img src={botIcon} alt="" />
                <div className="chatbot-message">
                    {item.text}
                </div>
            </div>
          );
        } else {
          return (
            <div className="user-response-container" key={index}>
                <div className="user-message">
                    {item.text}
                </div>
                <img src={userIcon} alt="" />
            </div>
          );
        }
      })}
      <AlwaysScrollToBottom />
    </>
  );
};

export default Messages;
