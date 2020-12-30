import { Avatar, IconButton } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import { logout } from "admin/features/Auth/adminSlice";
import React from 'react';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import AutorenewIcon from '@material-ui/icons/Autorenew';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import './style.scss';

function ContactHeader(props) {

  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    const action = logout();
    dispatch(action);
    history.push('/admin/auth/login');
  }

  return (
    <div className="contact__header">
      <Avatar src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.0-1/p200x200/97296697_1414671968716654_1711887605278179328_o.jpg?_nc_cat=110&ccb=2&_nc_sid=7206a8&_nc_ohc=SZIxUXt5naIAX-4FoRA&_nc_ht=scontent.fsgn2-6.fna&tp=6&oh=4ea6317d04d1669292a5cf9679eaa384&oe=5FF2C804" />
      <div className="contact__header--right">
        <IconButton>
          <AutorenewIcon />
        </IconButton>
        <IconButton>
          <ChatIcon />
        </IconButton>
        <IconButton onClick={handleLogout}>
          <ExitToAppIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default ContactHeader;
