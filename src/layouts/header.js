import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { translate } from 'react-i18next';

/*const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>{t('about')}}</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;*/


class Header extends Component {
	render() {

		const { t, i18n } = this.props;	    

		return (
			<header>
			    <nav>
			      <ul>
			        <li><Link to='/'>Home</Link></li>
			        <li><Link to='/about'>{t('about')}</Link></li>
			      </ul>
			    </nav>
			  </header>
		);
	}
}
export default translate('common')(Header);