import React from 'react';
import './style.scss';
import { SearchOutlined } from '@material-ui/icons';
function ContactSearch() {
  return (

    <div className="contact__search">
        <div className="contact__search--container">
          <SearchOutlined />
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>


  );
}

export default ContactSearch;
