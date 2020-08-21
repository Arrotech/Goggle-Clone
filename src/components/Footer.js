import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Footer.css';

function Footer() {
	return (
		<div className="footer">
            <p>Kenya</p>
            <hr className="footer__hr"/>
			<div className="footer_links">
				<div className="footer__linksLeft">
					<Link className="footer__link" to="advertising">Advertising</Link>
					<Link className="footer__link" to="business">Business</Link>
					<Link className="footer__link" to="about">About</Link>
					<Link className="footer__link" to="how-search-works">How Search works</Link>
				</div>
				<div className="footer__linksRight">
					<Link className="footer__link" to="privacy">Privacy</Link>
					<Link className="footer__link" to="terms">Terms</Link>
					<Link className="footer__link" to="settings">Settings</Link>
				</div>
			</div>
		</div>
	);
}

export default Footer;
