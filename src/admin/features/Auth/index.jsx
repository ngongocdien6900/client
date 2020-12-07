import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import ForgetPasswordPage from './pages/ForgotPasswordPage';
import LoginPage from './pages/LoginPage';
import ResetPasswordPage from './pages/ResetPasswordPage';

function AdminAuthFeature(props) {
  //lấy match thằng thằng route
  const match = useRouteMatch();

  if (localStorage.getItem('token')) {
    return <Redirect to="/admin" />;
  }

  return (
    <Switch>
      <Route path={`${match.url}/login`} exact component={LoginPage} />

      <Route path={`${match.url}/forgotpassword`} exact component={ForgetPasswordPage} />

      <Route path={`${match.url}/resetpassword/:id`} exact component={ResetPasswordPage} />
    </Switch>
  );
}

export default AdminAuthFeature;
