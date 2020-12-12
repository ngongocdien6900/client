import conversationApi from 'admin/api/conversationApi';
import React, { useEffect, useState } from 'react';
import ContactChats from './components/ContactChats';
import ContactHeader from './components/ContactHeader';
import ContactSearch from './components/ContactSearch';

import './style.scss';
ContactFeture.propTypes = {};

function ContactFeture(props) {

  const [conversationList, setConversationList] = useState([]);

  useEffect(() => {
    const fetchConversationList = async () => {
      try {
 
        const response = await conversationApi.getAllConversations();
        console.log(response);
        setConversationList(response.conversations);
      } catch (err) {
        console.log('Failed to fetch message list' + err);
      }
    };

    fetchConversationList();
    //eslint-disable-next-line
  }, []);

  return (
    <div className="contacts">
        <ContactHeader />
        <ContactSearch />
        <ContactChats conversations={conversationList}/>
    </div>
  );
}

export default ContactFeture;
