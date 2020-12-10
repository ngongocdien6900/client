import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import ContactChat from '../ContactChat';

ContactChats.propTypes = {};

ContactChats.defaultProps = {};

function ContactChats(props) {
  return (
    <div className="contact__chats">
      <ContactChat />
      <ContactChat />
      <ContactChat />
    </div>
  );
}

export default ContactChats;
