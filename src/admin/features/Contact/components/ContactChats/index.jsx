import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { Avatar } from '@material-ui/core';

ContactChats.propTypes = {
  conversations: PropTypes.array,
  onConversationClick: PropTypes.func,

};

ContactChats.defaultProps = {
  conversations: [],
  onConversationClick: null,

};

function ContactChats(props) {
  
  const { conversations, onConversationClick } = props;
  
  const handleClick = conversation => {

    if(!onConversationClick) return;
    
    onConversationClick(conversation);
  }

  return (
    <div className="contact__chats">
      {conversations.map((conversation) => (
        <div 
          className="contactChat" 
          key={conversation._id} 
          onClick={() => handleClick((conversation))}>
          <Avatar />
          <div className="contactChat__info">
            <h2>{conversation.nameConversation}</h2>
            <p>{conversation.lastMessage}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ContactChats;
