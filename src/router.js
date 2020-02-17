import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Auth from './routes/auth';
import Main from './routes/main';

function MainRouter() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/auth" component={Auth} />
      <Route />
    </Switch>
  );
}

export default MainRouter;
