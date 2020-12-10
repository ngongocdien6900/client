import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

ChatBody.propTypes = {};

ChatBody.defaultProps = {};

const getCurrentTime = () => {
  const date = new Date();
  const hours = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);
  return `${hours} : ${minutes}`;
};

function ChatBody(props) {

  return (
    <div className="chat__body">
      <p className="chat__message">
        <span className="chat__name">Thanh Uyen</span>
        This a is message
        <span className="chat__timestamp">{getCurrentTime()}</span>
      </p>

      <p className="chat__message chat__reciver">
        <span className="chat__name">Ngoc Dien</span>
        Hỗ trợ cc
        <span className="chat__timestamp">{getCurrentTime()}</span>
      </p>
    </div>
  );
}

export default ChatBody;
