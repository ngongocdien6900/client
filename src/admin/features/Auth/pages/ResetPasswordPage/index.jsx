import { Container } from '@material-ui/core';
import { unwrapResult } from '@reduxjs/toolkit';
import { resetPassword } from 'admin/features/Auth/adminSlice';
import ResetPasswordForm from 'admin/features/Auth/components/ResetPasswordForm';
import { useSnackbar } from 'notistack';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

ResetPasswordPage.propTypes = {};

function ResetPasswordPage(props) {

  const param = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  
  const { enqueueSnackbar } = useSnackbar();
  
  const handleSubmit = async (values) => {
    values.resetLink = param.id;
    try {
      const action = resetPassword(values);
      const resultAction = await dispatch(action);
      unwrapResult(resultAction);
      history.push('/admin/auth/login');
    } catch (error) {
      console.log(error);
      enqueueSnackbar(error.message, {
        variant: 'error',
      });
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <ResetPasswordForm onSubmit={handleSubmit} />
    </Container>
  );
}

export default ResetPasswordPage;
