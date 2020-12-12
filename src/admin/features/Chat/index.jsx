import messageApi from 'admin/api/messageApi';
import TAG_SOCKET_IO from 'admin/constants/socket-io';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import io from 'socket.io-client';
import ChatBody from './components/ChatBody';
import ChatFooter from './components/ChatFooter';
import ChatHeader from './components/ChatHeader';
import './style.scss';
import messageApii from 'api/messageApi';
let socket;
const ENDPOINT = 'localhost:5000';

function ChatFeature() {

  const [messages, setMessages] = useState([]);
  const idConversation = useSelector(state => state.contactAdmin.idConversation);
  const currentUser = useSelector(state => state.user.current);

  useEffect(() => {
    const fetchMessageList = async () => {
      try {
        const params = {
          idConversation
        };
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
    socket.on('message_server_return', (data) => {
      // const newMessages = [...messages, data];
      // setMessages(newMessages);
      setMessages(messages => [...messages, data]);
    });

    //disconnect ||cleanup the effect
    return () => socket.disconnect();
    //eslint-disable-next-line
  }, [idConversation]);

  const handleChatFormSubmit = async message => {
    const sender = currentUser.fullname;
    const IdConversation = idConversation;

      // request save message
    const payload = {
      sender,
      message,
      idConversation: IdConversation,
    };
    const data = await messageApii.saveMessage(payload);
    
    socket.emit(TAG_SOCKET_IO.CHAT, data);
  
  }
    


  return (
    <div className="chat">
      <ChatHeader />
      <ChatBody messageList={messages} currentUser={currentUser.fullname} />
      <ChatFooter onSubmit={handleChatFormSubmit}/>
    </div>
  );
}

export default ChatFeature;
