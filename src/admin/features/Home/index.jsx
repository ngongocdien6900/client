import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ChatFeature from '../Chat';
import ContactFeture from '../Contact';
import './style.scss';

function HomeAdminFeatures() {

  const history = useHistory();
  const idConversation = useSelector((state) => state.contactAdmin.idConversation);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      history.push('/admin/auth/login');
    }
    
    //eslint-disable-next-line
  }, []);

  return (
    <div className="home">
      <div className="home__body">
        <ContactFeture />
        {idConversation && <ChatFeature />}
      </div>
    </div>
  );
}

export default HomeAdminFeatures;
