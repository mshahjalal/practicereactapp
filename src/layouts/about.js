import React, { Component } from 'react';
import { translate } from 'react-i18next';

class About extends Component {
	render() {

		const { t, i18n } = this.props;	    

		return (
			<div>
		    	<h1>{t('about_description')}</h1>
		  	</div>
		);
	}
}

export default translate('common')(About);