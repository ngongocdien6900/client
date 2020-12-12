import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { Avatar } from '@material-ui/core';

ContactChats.propTypes = {
  conversations: PropTypes.array,
};

ContactChats.defaultProps = {
  conversations: [],
};

function ContactChats(props) {
  const { conversations } = props;
  console.log(conversations);

  return (
    <div className="contact__chats">
      {conversations.map((conversation) => (
        <div className="contactChat" key={conversation._id}>
          <Avatar />
          <div className="contactChat__info">
            <h2>Room name</h2>
            <p>This is the last message</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ContactChats;
