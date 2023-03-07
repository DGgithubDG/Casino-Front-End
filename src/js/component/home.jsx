import React from "react";
//import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { FcApproval } from "react-icons/fc";
import { FcBullish } from "react-icons/fc";
import { FcLink } from "react-icons/fc";
import casino from "../../img/casino.6.jpg";
import Navbar from "./navbar";
import Footer from "./footer";
import Card from "./card";
import ResponsiveImage from "./img";
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
        <div className="Background">
    <Navbar/>
    <div></div><div>
    <img class="img-fluid" src={casino}></img>
    <div class="card" >
  <div class=" header list-group-item text-center">
    <h3><strong><div className="header">KING J </div></strong></h3>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item text-center"><FcApproval/><i>Card text here</i></li>
    <li class="list-group-item text-center"><FcBullish/><i>Card text here</i></li>
    <li class="list-group-item text-center"><FcLink/><i>Card text here</i></li>
  </ul>
  <button className="btn btn-success text-center">REGISTER</button>

</div>
    {/* <img className="Back" src="https://www.wildz.com/cdn/2021/09/30/wildz-blog-online-casino-2_uid_6155c3688c52d.jpeg?&cover=true" class="img-fluid" alt=""/>  */}
     {/* <Card/>  */}
    </div>
    <Footer/>
    </div>

    
    
	);
};

export default Home;
