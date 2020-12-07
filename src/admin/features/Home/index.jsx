import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
HomeAdminFeatures.propTypes = {
    
};

function HomeAdminFeatures(props) {

    if (!localStorage.getItem('token')) {
    return <Redirect to="/admin/auth/login" />;
  }

    return (
        <div>
            Admin Pages
        </div>
    );
}

export default HomeAdminFeatures;