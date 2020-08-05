import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import CadastroVideo from './pages/Video';

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/cadastro/video" component={CadastroVideo} exact />
        </Switch>
      </BrowserRouter >
    </>
  );
};

export default Router;