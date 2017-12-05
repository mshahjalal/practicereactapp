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
			<div>
				<button onClick={() => changeLanguage('bd')}>Bangla</button>
          		<button onClick={() => changeLanguage('en')}>English</button>
    			<Header />
    			<h2>{t('home')}</h2>
    			<div>{t('labels.name')}</div>
    			<Main />
  			</div>
		);
	}
}

export default translate('common')(App);