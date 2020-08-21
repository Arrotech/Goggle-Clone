import React from 'react';
import '../assets/css/Header.css';
import { Link } from 'react-router-dom';
import AppsIcon from '@material-ui/icons/Apps';
import Avatar from '@material-ui/core/Avatar';

function Header() {
	return (
        <div className="header">
			<Link className="header__space" to="gmail">Gmail</Link>
			<Link className="header__space" to="images">Images</Link>
			<AppsIcon className="header__appIcon" />
			<Avatar className="header__avatar" />
		</div>
	);
}

export default Header;
