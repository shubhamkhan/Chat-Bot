import React, { useEffect, useRef } from "react";
import userIcon from './Icon/User.svg';
import botIcon from './Icon/Bot.svg';
import linkIcon from './Icon/Link.svg';
import YoutubeVideo from "./YoutubeVideo";

const Messages = (props) => {
    
  const AlwaysScrollToBottom = () => {
    const elementRef = useRef();
    useEffect(() => elementRef.current.scrollIntoView());
    return <div ref={elementRef} />;
  };

  const actionClick = (event) => {
    props.handleActionMessage(event.currentTarget.textContent);
  }

  return (
    <>
      {props.messages.map((item, index) => {
        if (item.from === "bot") {
          return (
            <div className="bot-response-container" key={index}>
                <img className="bot-response-container-icon" src={botIcon} alt="" />
                <div style={{marginBottom: 'auto'}}>
                  <div 
                    className="chatbot-message"
                    style={item.text.type === "" ? {borderRadius: '18px 18px 18px 0px'} : {borderRadius: '18px 18px 0px 0px'}}
                  >
                    {item.text.message}
                  </div>

                  {item.text.type === "Link" ? 
                    <div className="chatbot-message-url">
                      <a 
                        href={item.text.url}
                        target="_blank" rel="noopener noreferrer"
                        style={{textDecoration: 'none', color: "#4CABF2"}}
                      >
                        <img src={linkIcon} alt="" style={{paddingRight: '5px', height: '12px'}}/>
                        View More
                      </a>
                    </div>
                  : null}

                  {item.text.type === "Video" ?
                    <YoutubeVideo embedId={item.text.url} />
                  : null }

                  {item.text.type === "List" ?
                    <div className="chatbot-message-action">
                      {item.text.action.map((actionMessage, i) => {
                        return <div className="action-message" onClick={actionClick} key={i}>{actionMessage}</div>
                      })}
                    </div>
                  : null }
                  
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
