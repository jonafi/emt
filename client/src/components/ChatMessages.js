import React from 'react';
import { FormControl } from 'react-bootstrap'


function ChatMessages (props) {

  return (
    <div>
      <p>It's {props.words}</p>
    </div>
    
  );
};

export default ChatMessages;