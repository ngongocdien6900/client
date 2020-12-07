import CollectionsIcon from '@material-ui/icons/Collections';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import PropTypes from "prop-types";
import React, { useState } from 'react';
import './style.scss';

ChatFooter.propTypes = {
  onSubmit: PropTypes.func,
};

ChatFooter.defaultProps = {
  onSubmit: null,
};

function ChatFooter(props) {

  const [value, setValue] = useState('');

  const handleValueChange = e => {
      setValue(e.target.value);
  }

  const handleFormSubmit = e => {
    e.preventDefault();

    if(!onSubmit || value === '') return;
  
    onSubmit(value);
    //set value after submit
    setValue('');

  }

  const { onSubmit } = props;

  return (
    <div className="chat__footer">
      <InsertEmoticonIcon />
      <CollectionsIcon />
      <form onSubmit={handleFormSubmit}>
        <input 
          placeholder="Type a message" 
          type="text" 
          value={value}
          onChange={handleValueChange}
          />
        <button type="submit">Send a message</button>
      </form>
    </div>
  );
}

export default ChatFooter;
