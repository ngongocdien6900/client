import ChatFeature from 'features/Chat';
import ContactFeature from 'features/Contact';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './style.scss';

function HomeFeature(props) {
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      history.push('/login');
    }

    //eslint-disable-next-line
  }, []);

  return (
    <div className="home">
      <div className="home__body">
        <ChatFeature />
      </div>
    </div>
  );
}

export default HomeFeature;
