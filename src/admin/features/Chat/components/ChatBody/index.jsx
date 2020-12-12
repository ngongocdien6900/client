import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

ChatBody.propTypes = {
  messageList: PropTypes.array,
  currentUser: PropTypes.string,
};

ChatBody.defaultProps = {
  messageList: [],
  currentUser: ''
};

const getCurrentTime = () => {
  const date = new Date();
  const hours = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);
  return `${hours} : ${minutes}`;
};

function ChatBody(props) {

  const { messageList, currentUser } = props;
  console.log()

  return (
    <div className="chat__body">
      {messageList.map((message) => (
        <p className={currentUser === message.sender ? 'chat__message chat__reciver' : 'chat__message'} key={message._id}>
          <span className="chat__name">{message.sender}</span>
          {message.message}
          <span className="chat__timestamp">{getCurrentTime()}</span>
        </p>
      ))}
    </div>
  );
}

export default ChatBody;
