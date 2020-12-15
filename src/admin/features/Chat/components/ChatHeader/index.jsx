import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, MoreVert, SearchOutlined } from "@material-ui/icons";
import React from 'react';
import { useSelector } from "react-redux";
import './style.scss';

ChatHeader.propTypes = {

};

function ChatHeader(props) {

  const nameConversation = useSelector(state => state.contactAdmin.nameConversation);

  return (
    <div className="chat__header">
    <Avatar />

    <div className="chat__headerInfo">
      <h3>{nameConversation}</h3>
    </div>

    <div className="chat__headerRight">
      <IconButton>
        <SearchOutlined />
      </IconButton>
      <IconButton>
        <AttachFile />
      </IconButton>
      <IconButton>
        <MoreVert />
      </IconButton>
    </div>
  </div>
  );
}

export default ChatHeader;