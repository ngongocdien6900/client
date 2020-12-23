import CollectionsIcon from '@material-ui/icons/Collections';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Picker from 'emoji-picker-react';
import './style.scss';

ChatFooter.propTypes = {
  onSubmit: PropTypes.func,
};

ChatFooter.defaultProps = {
  onSubmit: null,
};

function ChatFooter(props) {
  const [value, setValue] = useState('');
  const [block] = useState(false);
  const [openEmoji, setOpenEmoji] = useState('none');
  const [chosenEmoji, setChosenEmoji] = useState(null);

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!onSubmit || value === '') return;

    onSubmit(value);
    //set value after submit
    setValue('');
    setOpenEmoji('none');
  };
  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
    setValue(value + emojiObject.emoji );
  };
  const { onSubmit } = props;

  return (
    <div className="chat__footer">
      <div className="sticker" style={{ display: openEmoji}}>
        <Picker onEmojiClick={onEmojiClick} />
      </div>
      <InsertEmoticonIcon
        onClick={() => setOpenEmoji(openEmoji === 'none' ? 'block' : 'none')}
        style={{ display: block ? 'none' : 'block' }}
      />
      <CollectionsIcon />
      <form onSubmit={handleFormSubmit}>
        <input placeholder="Type a message" type="text" value={value} onChange={handleValueChange} />
        <button type="submit">Send a message</button>
      </form>
    </div>
  );
}

export default ChatFooter;
