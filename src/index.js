import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes/Routes';
import Amplify from "aws-amplify";
import config from "./aws-exports";
Amplify.configure(config);


ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
