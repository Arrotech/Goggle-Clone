import React from 'react';
import '../assets/css/Home.css';
import Logo from '../assets/img/googlelogo.png';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import Footer from '../components/Footer';

function Home() {
	return (
		<div className="home">
			<img className="home__logo" src={Logo} alt="Google Logo" />
			<div className="home__searchInput">
				<SearchIcon className="home__searchIcon" />
				<input className="home__input" />
				<MicIcon className="home__micIcon" />
			</div>
			<center className="home__buttons">
				<Button className="home__btn">Google Search</Button>
				<Button className="home__btn">I'm Feeling Lucky</Button>
            </center>
            <p>Google offered in: <span>Kiswahili</span></p>
            <Footer/>
		</div>
	);
}

export default Home;
