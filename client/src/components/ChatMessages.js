import React from 'react';
import { FormControl } from 'react-bootstrap'


function ChatMessages (props) {

  return (
    <div className="message">
      <div className="message-username"><span className="user">{props.username}:</span> <span className="message-text">{props.text}</span></div>
    </div>
    
  );
};

export default ChatMessages;