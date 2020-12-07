import roomApi from 'api/roomApi';
import React, { useEffect, useState } from 'react';
import ContactChats from './components/ContactChats';
import ContactHeader from './components/ContactHeader';
import ContactSearch from './components/ContactSearch';
import './style.scss';
ContactFeture.propTypes = {};

function ContactFeture(props) {

  // const [chatRooms, setChatRooms] = useState([]);

  // useEffect(() => {
  //   const getChatRooms = async () => {
  //     try {
  //       const response = await roomApi.getAllRoom();
  //       setChatRooms(response)
  //     } catch(error) {
  //       console.log('Error :', error);
  //     }
  //   }

  //   getChatRooms();
  // }, []);

  return (
    <div className="contacts">
        <ContactHeader />
        <ContactSearch />
        <ContactChats />
    </div>
  );
}

export default ContactFeture;
