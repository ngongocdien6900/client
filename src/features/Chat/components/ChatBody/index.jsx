import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

ChatBody.propTypes = {
  messages: PropTypes.array,
};

ChatBody.defaultProps = {
  messages: [],
};

function ChatBody(props) {
  const { messages } = props;

  return (
    <div className="chat__body">
      {messages.map((message) => (
        <p className="chat__message" >
          <span className="chat__name">Thanh Uyen</span>
          {/* This a is message */}
          {message}
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
      ))}

      {/* <p className="chat__message chat__reciver">
      <span className="chat__name">Thanh Uyen</span>
      This a is message
      <span className="chat__timestamp">{new Date().toUTCString()}</span>
    </p> */}
    </div>
  );
}

export default ChatBody;
