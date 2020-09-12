import React from 'react';
import { FormControl } from 'react-bootstrap'


function ChatMessages (props) {

  return (
    <div className="message">
      <div className="message-username">{props.username}: <span className="message-text">{props.text}</span></div>
    </div>
    
  );
};

export default ChatMessages;