import Loading from 'components/Loading';
import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';

const Home = React.lazy(() => import('features/Home'));
const Auth = React.lazy(() => import('features/Auth'));
const HomeAdmin = React.lazy(() => import('admin/features/Home'));
const AuthAdmin = React.lazy(() => import('admin/features/Auth'));
function App() {
  return (

    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Auth} />
        <Route path="/admin" exact component={HomeAdmin} />
        <Route path="/admin/auth" component={AuthAdmin}/> 
      </Switch>
    </Suspense>
    
  );
}

export default App;
