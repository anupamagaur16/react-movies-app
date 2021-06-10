import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './common/common.css';
import 'typeface-roboto';
import reportWebVitals from './reportWebVitals';
import Controller from './screens/Controller';

ReactDOM.render(
  <React.StrictMode>
    <Controller  />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
