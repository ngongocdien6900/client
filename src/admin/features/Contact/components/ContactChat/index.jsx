import React from 'react';
import './style.scss';
import { Avatar } from '@material-ui/core';

function ContactChat(props) {
  return (
    <div className="contactChat">
      <Avatar />
      <div className="contactChat__info">
        <h2>Room name</h2>
        <p>This is the last message</p>
      </div>
    </div>
  );
}

export default ContactChat;
