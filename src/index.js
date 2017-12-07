import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './i18n.js';

import 'bootstrap/dist/css/bootstrap.css';
import "./style.scss";

ReactDOM.render(
	<BrowserRouter>
    <App />
  </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();