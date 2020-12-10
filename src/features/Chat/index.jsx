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
  //get state in redux
  const currentUser = useSelector((state) => state.user.current);
  const [messages, setMessage] = useState([]);

  //handle get messages to server
  useEffect(() => {
    const fetchMessageList = async () => {
      try {
        const params = {
          idUser: currentUser._id,
        };
        const response = await messageApi.getMessage(params);
        console.log('Data response', response);
        setMessage(response.messageList);
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

    //setup response
    socket.emit('join', currentUser._id);

    //update socket

    //disconnect ||cleanup the effect
    return () => socket.disconnect();
    //eslint-disable-next-line
  }, []);

  const handleChatFormSubmit = (values) => {
    //nếu chưa nhắn gì với admin thi tạo room và gửi tin nhắn
    if (messages.length === 0) {
      socket.emit('join_room', currentUser._id);
      socket.emit('chat', values);
    } else {
      socket.emit('chat', values);
    }
  };

  return (
    // messages={messages}
    <div className="chat">
      <ChatHeader />
      <ChatBody messageList={messages} currentUser={currentUser.fullname} />
      <ChatFooter onSubmit={handleChatFormSubmit} />
    </div>
  );
}

export default ChatFeature;
