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
		<nav className="navbar navbar-expand-lg bg-dark">
  <div><a className="fs-1" href="#">King J </a></div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a className="nav-link active"  href="https://Kingjent.com/"><div className="navnav"><button type="button" class="btn btn-dark"><FaBasketballBall/>SPORTS</button></div></a>
        </li>
        <li class="nav-item">
        <a className="nav-link active" aria-current="page" href="https://Kingjent.com/"><div className="navnav"><button type="button" class="btn btn-dark"><MdCasino/>CASINO</button></div></a>
        </li>
        <li class="nav-item">
        <a className="nav-link active" aria-current="page" href="https://Kingjent.com/"><div className="navnav"><button type="button" class="btn btn-dark"><FaMoneyBillAlt/>LIVE CASINO</button></div></a>
        </li>
        <li class="nav-item">
        <a className="nav-link active" aria-current="page" href="https://Kingjent.com/"><div className="navnav"><button type="button" class="btn btn-dark"><GiCard7Clubs/>POKER</button></div></a>
        </li>
        <li class="nav-item">
        <a className="nav-link active" aria-current="page" href="https://Kingjent.com/"><div className="navnav"><button type="button" class="btn btn-dark"><FaGamepad/>VIRTUAL SPORTS</button></div></a>
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
</nav>

</div>


	);
};

export default Navbar;
