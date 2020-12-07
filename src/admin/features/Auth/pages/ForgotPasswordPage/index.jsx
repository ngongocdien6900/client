import { Container } from '@material-ui/core';
import { unwrapResult } from '@reduxjs/toolkit';
import { forgotPassword } from 'admin/features/Auth/adminSlice';
import ForgotPasswordForm from 'admin/features/Auth/components/ForgotPasswordForm';
import { useSnackbar } from 'notistack';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';  

ForgetPasswordPage.propTypes = {};

function ForgetPasswordPage(props) {
  const dispatch = useDispatch();
  const [showGoBack, setShowGoBack] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (values) => {
    try {
      const action = forgotPassword(values);
      const resultAction = await dispatch(action);
      //hàm này sẽ handle error
      const data = unwrapResult(resultAction);
      enqueueSnackbar(data.message, {
        variant: 'success',
      });
      setShowGoBack(true);
    } catch (error) {
      enqueueSnackbar(error.message, {
        variant: 'error',
      });
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <ForgotPasswordForm onSubmit={handleSubmit} />
      {showGoBack && <Link to="/admin/auth/login">Go back</Link>}
    </Container>
  );
}

export default ForgetPasswordPage;
