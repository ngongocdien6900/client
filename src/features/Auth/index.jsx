import { Container, Typography } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import React, { useEffect } from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './style.scss';
import { facebookLogin, googleLogin } from './userSlice';
import EmailIcon from '@material-ui/icons/Email';

function AuthFeature(props) {
  const { enqueueSnackbar } = useSnackbar();

  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      history.push('/');
      return;
    }

    //eslint-disable-next-line
  }, []);

  const responseGoogle = async (res) => {
    try {
      const action = googleLogin(res);
      const resultAction = await dispatch(action);
      unwrapResult(resultAction);
      history.push('/');
    } catch (error) {
      enqueueSnackbar('Đăng nhập thất bại', {
        variant: 'error',
      });
    }
  };

  const responseFacebook = async (response) => {
    try {
      const action = facebookLogin(response);
      const resultAction = await dispatch(action);
      unwrapResult(resultAction);
      history.push('/');
    } catch (error) {
      enqueueSnackbar('Đăng nhập thất bại', {
        variant: 'error',
      });
    }
  };

  return (
    <Container component="main" maxWidth="xs" className="root">
      <Typography className="title" component="h3" variant="h5">
        Đăng nhập với
      </Typography>
      <div className="login">
        <GoogleLogin
          clientId="558364175234-514g61eos4bo97uj5mp2vsum8j22dupr.apps.googleusercontent.com"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
          buttonText="GOOGLE"
          render={(renderProps) => (
            <button onClick={renderProps.onClick} disabled={renderProps.disabled} className="loginBtn">
              <span className="icon">
                <EmailIcon color="secondary" />
              </span>
              <span className="text">Google</span>
            </button>
          )}
        >
          <span className="text"> Google </span>
        </GoogleLogin>
        <FacebookLogin
          appId="290494145666275"
          autoLoad={false}
          callback={responseFacebook}
          render={(renderProps) => (
            <button onClick={renderProps.onClick} className="loginBtn">
              <span className="icon">
                <FacebookIcon color="primary" />
              </span>
              <span className="text">Facebook</span>
            </button>
          )}
        />
      </div>
    </Container>
  );
}

export default AuthFeature;
