import React, {useState }from "react";
//import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { FaHome } from 'react-icons/fa'
import { FaBasketballBall } from 'react-icons/fa'
import { FaGamepad } from 'react-icons/fa'
import { FaMoneyBillAlt } from 'react-icons/fa'
import { AiFillDollarCircle } from 'react-icons/ai'
import { GiCard7Clubs } from 'react-icons/gi'
import { MdStars } from 'react-icons/md'
import { ImNewspaper } from 'react-icons/im'


const White = {background:"White"}
const Blue = {background:"Blue"}


//create your first component
const Navbar = () => {
    const [color, setColor] = useState(White)
	return (
		<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <div onMouseEnter={() => setColor(Blue)}
    style= {color}><a className="fs-1" href="#">King J </a></div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><FaBasketballBall/>SPORTS</a>
		  
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><FaMoneyBillAlt/>CASINO</a>

        </li>
        <li className="nav-item dropdown">
		<a className="nav-link active" aria-current="page" href="#"><AiFillDollarCircle/>LIVE CASINO</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><GiCard7Clubs/>POKER</a>
        </li>
        <a className="nav-link active" aria-current="page" href="#"><FaGamepad/>VIRTUAL SPORTS</a>
        <a className="nav-link active" aria-current="page" href="#"><MdStars/>PROMOTIONS</a>
        <a className="nav-link active" aria-current="page" href="#"><ImNewspaper/>BLOG</a>


      </ul>
  

      <form className="d-flex" role="search">
		<div className="Register"><button type="button" className="btn btn-success">REGISTER</button></div>
		<div className="Login"><button type="button" className="btn btn-success">LOGIN</button></div>


      </form>
    </div>
  </div>
</nav>

	);
};

export default Navbar;
