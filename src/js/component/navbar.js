import React, {useState }from "react";
//import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { FaHome } from 'react-icons/fa'
import { FaBasketballBall } from 'react-icons/fa'
import { FaGamepad } from 'react-icons/fa'
import { FaMoneyBillAlt } from 'react-icons/fa'
import { GiCard7Clubs } from 'react-icons/gi'
import { MdCasino, MdStars } from 'react-icons/md'
import { ImNewspaper } from 'react-icons/im'





//create your first component
const Navbar = () => {
	return (
<div>
		<nav class="navbar navbar-expand-lg navbar-light bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><h1><strong>KING J</strong></h1></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <a className="nav-link active" aria-current="page" href="https://Kingjent.com/"><div className="navnav"><button type="button" class="btn btn-dark"><FaBasketballBall/>SPORTS</button></div></a>
        </li>
		<li class="nav-item">
        <a className="nav-link active" aria-current="page" href="https://Kingjent.com/"><div className="navnav"><button type="button" class="btn btn-dark"><FaBasketballBall/>CASINO</button></div></a>
        </li>
		<li class="nav-item">
        <a className="nav-link active" aria-current="page" href="https://Kingjent.com/"><div className="navnav"><button type="button" class="btn btn-dark"><MdCasino/>LIVE CASINO</button></div></a>
        </li>
		<li class="nav-item">
        <a className="nav-link active" aria-current="page" href="https://Kingjent.com/"><div className="navnav"><button type="button" class="btn btn-dark"><FaGamepad/>VIRTUAL GAMES</button></div></a>
        </li>
		<li class="nav-item">
        <a className="nav-link active" aria-current="page" href="https://Kingjent.com/"><div className="navnav"><button type="button" class="btn btn-dark"><GiCard7Clubs/>POKER</button></div></a>
        </li>
		<li class="nav-item">
        <a className="nav-link active" aria-current="page" href="https://Kingjent.com/"><div className="navnav"><button type="button" class="btn btn-dark"><MdStars/>PROMOTIONS</button></div></a>
        </li>
		<li class="nav-item">
        <a className="nav-link active" aria-current="page" href="https://Kingjent.com/"><div className="navnav"><button type="button" class="btn btn-dark"><ImNewspaper/>BLOG</button></div></a>
        </li>
		
      </ul>
      
      <form className="d-flex" role="search">
		<div className="Register"><button type="button" className="btn btn-success">REGISTER</button></div>
		<div className="Login"><button type="button" className="btn btn-success">LOGIN</button></div>


      </form>
    </div>
  </div>
</nav>
	</div>

	);
};

export default Navbar;
