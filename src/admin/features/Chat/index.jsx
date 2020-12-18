import messageApi from 'admin/api/messageApi';
import TAG_SOCKET_IO from 'admin/constants/socket-io';
import messageApii from 'api/messageApi';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import io from 'socket.io-client';
import ChatBody from './components/ChatBody';
import ChatFooter from './components/ChatFooter';
import ChatHeader from './components/ChatHeader';
import './style.scss';

let socket;
const ENDPOINT = 'localhost:5000';

function ChatFeature() {

  const [messages, setMessages] = useState([]);
  const idConversation = useSelector(state => state.contactAdmin.idConversation);
  const currentAdmin = useSelector(state => state.admin.current);

  useEffect(() => {
    const fetchMessageList = async () => {
      try {
        const params = {
          idConversation
        };
        if(!idConversation) return;

        const response = await messageApi.getMessage(params);
        setMessages(response.messageList);
      } catch (err) {
        console.log('Failed to fetch message list' + err);
      }
    };

    fetchMessageList();
    //eslint-disable-next-line
  }, [idConversation]);


  useEffect(() => {
    //create new connect
    socket = io(ENDPOINT);

    //setup response
    socket.emit(TAG_SOCKET_IO.ADMIN_JOIN_CONVERSATION, idConversation);
    

    //update socket
    socket.on(TAG_SOCKET_IO.NEW_MESSAGE, (message) => {
      setMessages(messages => [...messages, message]);
    });

    socket.on('test', value => {
      console.log(value);
    })

    //disconnect 
    return () => socket.disconnect();
    //eslint-disable-next-line
  }, [idConversation]);

  const handleChatFormSubmit = async message => {
    const sender = currentAdmin.fullname;

    // request save message
    const payload = {
      sender,
      message,
      idConversation,
    };
    const data = await messageApii.saveMessage(payload);
    
    socket.emit(TAG_SOCKET_IO.CHAT, data);
  
  }
    
  return (
    <div className="chat">
      <ChatHeader />
      <ChatBody messageList={messages} currentUser={currentAdmin.fullname} />
      <ChatFooter onSubmit={handleChatFormSubmit}/>
    </div>
  );
}

export default ChatFeature;
