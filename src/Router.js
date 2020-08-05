import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Menu from './components/Menu';
import Home from './pages/Home';

const Router = () => {
  return (
    <>
      <Menu />
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter >
    </>
  );
};

export default Router;