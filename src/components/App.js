import React, { Component } from 'react';
import { translate, Trans } from 'react-i18next';
//import logo from '../logo.svg';
import '../App.css';
import Header from '../layouts/header.js'
import Main from '../layouts/main.js'

class App extends Component {
	render() {

		const { t, i18n } = this.props;

	    const changeLanguage = (lng) => {
	      i18n.changeLanguage(lng);
	    }

		return (
			<div class="app-main">
				<div class="form-group">
					<button class="btn btn-primary" onClick={() => changeLanguage('bd')}>Bangla</button>
				</div>
				<div class="form-group">
					<button type="button" class="btn btn-success" onClick={() => changeLanguage('en')}>English</button>
				</div>
				
          		
    			<Header />
    			<h2>{t('home')}</h2>
    			<div>{t('labels.name')}</div>
    			<Main />
  			</div>
		);
	}
}

export default translate('common')(App);