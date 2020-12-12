import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, MoreVert, SearchOutlined } from "@material-ui/icons";
import { logout } from "features/Auth/userSlice";
import React from 'react';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import './style.scss';

ChatHeader.propTypes = {

};

function ChatHeader(props) {

  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    const action = logout();
    dispatch(action);
    history.push('/login');

  }

  return (
    <div className="chat__header">
    <Avatar />

    <div className="chat__headerInfo">
      <h3>Admin</h3>
    </div>

    <div className="chat__headerRight">
      <IconButton>
        <SearchOutlined />
      </IconButton>
      <IconButton>
        <AttachFile />
      </IconButton>
      <IconButton onClick={handleLogout}>
        <MoreVert/>
      </IconButton>
    </div>
  </div>
  );
}

export default ChatHeader;