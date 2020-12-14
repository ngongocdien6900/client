import React, { useEffect } from 'react';
import { Route, Switch, useHistory, useRouteMatch } from 'react-router-dom';
import ForgetPasswordPage from './pages/ForgotPasswordPage';
import LoginPage from './pages/LoginPage';
import ResetPasswordPage from './pages/ResetPasswordPage';

function AdminAuthFeature(props) {
  //lấy match thằng thằng route
  const match = useRouteMatch();

  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      history.push('/admin');
    }

    //eslint-disable-next-line
  }, []);


  return (
    <Switch>
      <Route path={`${match.url}/login`} exact component={LoginPage} />

      <Route path={`${match.url}/forgotpassword`} exact component={ForgetPasswordPage} />

      <Route path={`${match.url}/resetpassword/:id`} exact component={ResetPasswordPage} />
    </Switch>
  );
}

export default AdminAuthFeature;
