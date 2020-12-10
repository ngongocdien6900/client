import roomApi from 'api/messageApi';
import React, { useEffect, useState } from 'react';
import ContactChats from './components/ContactChats';
import ContactHeader from './components/ContactHeader';
import ContactSearch from './components/ContactSearch';

import './style.scss';
ContactFeture.propTypes = {};

function ContactFeture(props) {

  return (
    <div className="contacts">
        <ContactHeader />
        <ContactSearch />
        <ContactChats />
    </div>
  );
}

export default ContactFeture;
