import React from 'react';
import {BrowserRouter,Switch, Route} from 'react-router-dom'
import Menu from '../pages/Menu';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
          <Route exact path="/" component={Menu}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
