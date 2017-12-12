import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
//import './app.scss';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './i18n.js';

//import 'bootstrap/dist/css/bootstrap.css';


ReactDOM.render(
	<BrowserRouter>
    <App />
  </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();