import React from "react";
//import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { FaHome } from 'react-icons/fa'
import { FaBasketballBall } from 'react-icons/fa'
import { FaGamepad } from 'react-icons/fa'
import { FaMoneyBillAlt } from 'react-icons/fa'
import { AiFillDollarCircle } from 'react-icons/ai'
import { GiCard7Clubs } from 'react-icons/gi'
import { MdStars } from 'react-icons/md'
import casino from "../../img/casino.jpg";
import Navbar from "./navbar";
import Footer from "./footer";
import Card from "./card";
import ResponsiveImage from "./img";
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
    <div>
    <div><Navbar/></div>
    <div className="Back">
			<Card /></div>
    <div><Footer/>
    </div>
    </div>
    
	);
};

export default Home;
