import conversationApi from 'admin/api/conversationApi';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactChats from './components/ContactChats';
import ContactHeader from './components/ContactHeader';
import ContactSearch from './components/ContactSearch';
import { searchConversation, showConversation, updateConversationList, updateIdConversation, updateLastMessage } from './contactSlice';
import './style.scss';
import io from 'socket.io-client';
let socket;
const ENDPOINT = 'localhost:5000';

function ContactFeture() {

  const dispatch = useDispatch();
  const conversationList = useSelector(state => state.contactAdmin.conversationList);
  const conversationSearch = useSelector(state => state.contactAdmin.conversationSearch);
  useEffect(() => {

    const fetchConversationList = async () => {
      try {
        
        const response = await conversationApi.getAllConversations();
        dispatch(updateConversationList(response));
      } catch (err) {
        console.log('Failed to fetch message list' + err);
      }
    };

    fetchConversationList();

    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    socket = io(ENDPOINT);
    socket.on('lastMessage', data => {
      const action = updateLastMessage(data);
      dispatch(action);
    })

    socket.on('show_me', data => {
      const action = showConversation(data);
      dispatch(action);
    })

    return () => socket.disconnect();
    //eslint-disable-next-line
  }, []);

  const handleConversationClick = (conversation) => {
    const action = updateIdConversation(conversation);
    dispatch(action);
  }

  const handleSearchChange = newFilter => {
    const filter = newFilter.searchTerm;
    const action = searchConversation(filter)
    dispatch(action);
  } 

  return (
    <div className="contacts">
        <ContactHeader />
        <ContactSearch onSubmit={handleSearchChange}/>
        <ContactChats 
          conversations={conversationSearch.length !== 0 ? conversationSearch : conversationList.conversations} 
          onConversationClick={handleConversationClick}
        />
    </div>
  );
}

export default ContactFeture;
