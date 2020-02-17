import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './routes/home';
import Contacts from './routes/contacts';
import MyProjects from './routes/my-projects';
import Profile from './routes/profile';

function AppRouter() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/my-projects" exact component={MyProjects} />
      <Route path="/contacts" exact component={Contacts} />
      <Route path="/profile" exact component={Profile} />
    </Switch>
  );
}

export default AppRouter;
