import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import ChatBody from './components/ChatBody';
import ChatFooter from './components/ChatFooter';
import ChatHeader from './components/ChatHeader';
import './style.scss';

let socket;
const ENDPOINT = 'localhost:5000';

function ChatFeature() {

  const [messages, setMessages] = useState([]);
  
  useEffect(() => {
    //create new connect
    socket = io(ENDPOINT);

    //setup response
    socket.on('message-welcome', message => {
      
      setMessages([...messages, message]);
      console.log(messages);
    })

    //update socket

    //disconnect ||cleanup the effect
    return () => socket.disconnect();
    //eslint-disable-next-line
  }, []);

  const handleChatFormSubmit = (values) => {
    console.log(values)
  }

  return (
    <div className="chat">
      <ChatHeader />
      <ChatBody messages={messages}/>
      <ChatFooter onSubmit={handleChatFormSubmit}/>
    </div>
  );
}

export default ChatFeature;
