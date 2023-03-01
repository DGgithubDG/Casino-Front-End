import React from "react";
//import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { FaHome } from 'react-icons/fa'
import { FaBasketballBall } from 'react-icons/fa'
import { FaGamepad } from 'react-icons/fa'
import { FaMoneyBillAlt } from 'react-icons/fa'
import { AiFillDollarCircle } from 'react-icons/ai'
import { GiCard7Clubs } from 'react-icons/gi'
import { MdStars } from 'react-icons/md'
import Navbar from "./navbar";
import Footer from "./footer";
import Card from "./card";
//create your first component
const Home = () => {
	return (
    <div>
    <div><Navbar/></div>
		<div className="mx-auto" style={{ width: "20%"}}>
			<Card />
		</div>
    <div><Footer/>
    </div>
    </div>
	);
};

export default Home;
