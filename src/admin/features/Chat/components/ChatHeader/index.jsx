import { IconButton } from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";
import CallIcon from '@material-ui/icons/Call';
import VideocamIcon from '@material-ui/icons/Videocam';
import React from 'react';
import { useSelector } from "react-redux";
import './style.scss';

function ChatHeader() {

  const nameConversation = useSelector(state => state.contactAdmin.nameConversation);

  return (
    <div className="chat__header">
    <div className="chat__header--info">
      <h3>{nameConversation}</h3>
    </div>
    <div className="chat__header--right">
    <IconButton>
        <CallIcon />
      </IconButton>
      <IconButton>
        <VideocamIcon />
      </IconButton>
      <IconButton>
        <MoreVert />
      </IconButton>
    </div>
  </div>
  );
}

export default ChatHeader;