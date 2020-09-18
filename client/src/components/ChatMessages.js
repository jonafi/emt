import React from 'react';


function ChatMessages (props) {

  return (
    <div className="message">
      <div className="message-username"><span className="user">{props.username}:</span> <span className="message-text">{props.text}</span></div>
    </div>
    
  );
};

export default ChatMessages;