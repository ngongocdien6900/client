import { Avatar, IconButton } from '@material-ui/core';
import CallIcon from '@material-ui/icons/Call';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import VideocamIcon from '@material-ui/icons/Videocam';
import { logout } from 'features/Auth/userSlice';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './style.scss';

function ChatHeader() {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    const action = logout();
    dispatch(action);
    history.push('/login');
  };

  return (
    <div className="chat__header">
      <div className="chat__headerInfo">
        <h3>Admin đẹp trai</h3>
      </div>
      <div className="chat__headerRight">
        <IconButton>
          <CallIcon />
        </IconButton>
        <IconButton>
          <VideocamIcon />
        </IconButton>
        <IconButton onClick={handleLogout}>
          <ExitToAppIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default ChatHeader;
