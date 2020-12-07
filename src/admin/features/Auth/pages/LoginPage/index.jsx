import { Container } from '@material-ui/core';
import { unwrapResult } from '@reduxjs/toolkit';
import { login } from 'admin/features/Auth/adminSlice';
import LoginForm from 'admin/features/Auth/components/LoginForm';
import { useSnackbar } from 'notistack';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

LoginPage.propTypes = {};

function LoginPage(props) {
  
  const dispatch = useDispatch();
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (values) => {
    try {
      const action = login(values);
      const resultAction = await dispatch(action);
      //hàm này sẽ handle error
      unwrapResult(resultAction);
      history.push('/admin');
    } catch (error) {
      enqueueSnackbar(error.message, { variant: 'error' });
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <LoginForm onSubmit={handleSubmit} />
      
      <Link to="/admin/auth/forgotpassword">Forgot password</Link>

    </Container>
  );
}

export default LoginPage;
