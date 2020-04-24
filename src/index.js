import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Parent';
import * as serviceWorker from './serviceWorker';
import { UseRedux } from "./useRedux";
ReactDOM.render(
  // <React.StrictMode>
  <UseRedux>
    <Home />
  </UseRedux>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
