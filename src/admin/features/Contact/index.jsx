import conversationApi from 'admin/api/conversationApi';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactChats from './components/ContactChats';
import ContactHeader from './components/ContactHeader';
import ContactSearch from './components/ContactSearch';
import { updateConversationList, updateIdConversation } from './contactSlice';
import './style.scss';

function ContactFeture() {

  const dispatch = useDispatch();
  const conversationList = useSelector(state => state.contactAdmin.conversationList);
  useEffect(() => {

    const fetchConversationList = async () => {
      try {
        
        const response = await conversationApi.getAllConversations();
        dispatch(updateConversationList(response));
        // setConversationList(response.conversations);
      } catch (err) {
        console.log('Failed to fetch message list' + err);
      }
    };

    fetchConversationList();

    //eslint-disable-next-line
  }, []);

  const handleConversationClick = (conversation) => {
    const action = updateIdConversation(conversation._id);
    dispatch(action);
  }

  return (
    <div className="contacts">
        <ContactHeader />
        <ContactSearch />
        <ContactChats 
          conversations={conversationList.conversations} 
          onConversationClick={handleConversationClick}
        />
    </div>
  );
}

export default ContactFeture;
