import messageApi from 'api/messageApi';
import TAG_SOCKET_IO from 'constants/socket-io';
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
  const currentUser = useSelector((state) => state.user.current);
  const [messages, setMessages] = useState([]);

  //handle get messages to server
  useEffect(() => {
    const fetchMessageList = async () => {
      try {
        const params = {
          idUser: currentUser._id,
        };
        const response = await messageApi.getMessage(params);
        setMessages(response.messageList);
      } catch (err) {
        console.log('Failed to fetch message list' + err);
      }
    };

    fetchMessageList();
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    //create new connect
    socket = io(ENDPOINT);

    socket.emit(TAG_SOCKET_IO.JOIN_CONVERSATION, currentUser._id);
    //setup response
    socket.on(TAG_SOCKET_IO.NEW_MESSAGE, (message) => {
      setMessages(messages => [...messages, message]);
    });

    //disconnect ||cleanup the effect
    return () => socket.disconnect();

    //eslint-disable-next-line
  }, []);

  const handleChatFormSubmit = async (message) => {

    const sender = currentUser.fullname;

    //emit create conversation and chat
    if (messages.length === 0) {
      socket.emit(TAG_SOCKET_IO.CREATE_CONVERSATION, currentUser);

      socket.on(TAG_SOCKET_IO.RESPONSE_ROOM, async (conversation) => {
        const payload = {
          sender,
          message,
          idConversation: conversation._id,
        };
        const data = await messageApi.saveMessage(payload);

        socket.emit(TAG_SOCKET_IO.CHAT, data);
      });
    } else {
      const idConversation = messages[0].idConversation._id || messages[0].idConversation;
      const conversation = messages[0].idConversation;
      console.log('Conversation: ', conversation);
      // request save message
      const payload = {
        sender,
        message,
        idConversation,
      };
      const data = await messageApi.saveMessage(payload);
      
      socket.emit(TAG_SOCKET_IO.CHAT, data);
    } 


  };

  return (
    <div className="chat">
      <ChatHeader />
      <ChatBody messageList={messages} currentUser={currentUser.fullname} />
      <ChatFooter onSubmit={handleChatFormSubmit} />
    </div>
  );
}

export default ChatFeature;
