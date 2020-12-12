import conversationApi from 'admin/api/conversationApi';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import ContactChats from './components/ContactChats';
import ContactHeader from './components/ContactHeader';
import ContactSearch from './components/ContactSearch';
import { updateIdConversation } from './contactSlice';

import './style.scss';
ContactFeture.propTypes = {};

function ContactFeture(props) {

  const [conversationList, setConversationList] = useState([]);


  const dispatch = useDispatch();

  useEffect(() => {
    const fetchConversationList = async () => {
      try {
 
        const response = await conversationApi.getAllConversations();
        setConversationList(response.conversations);
      } catch (err) {
        console.log('Failed to fetch message list' + err);
      }
    };

    fetchConversationList();
    //eslint-disable-next-line
  }, []);

  const handleConversationClick = (idConversation) => {
    const action = updateIdConversation(idConversation);
    dispatch(action);

  }

  return (
    <div className="contacts">
        <ContactHeader />
        <ContactSearch />
        <ContactChats 
          conversations={conversationList} 
          onConversationClick={handleConversationClick}
        />
    </div>
  );
}

export default ContactFeture;
