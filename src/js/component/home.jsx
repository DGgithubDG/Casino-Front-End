import React from "react";
//import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { FcApproval } from "react-icons/fc";
import { FcBullish } from "react-icons/fc";
import { FcLink } from "react-icons/fc";
import casino from "../../img/casino.9.jpg";
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
    <div class="card text-center">
  <div class="card-body">
    <h5 class="card-title"><h1>CASINO</h1></h5>
    <div class="mb-6"><hr class="solid"/> </div>

    <p class="card-text"><FcApproval size={38}/><strong>Always the best odds with King J</strong></p>
    <p class="card-text"><FcBullish size={38}/><strong>Quick and easy deposits & withdrawals</strong></p>
    <p class="card-text"><FcLink size={38}/><strong>Transparency, responsibility and security</strong></p>
   
    <a href="#" class="button btn btn-success">REGISTER</a>
  </div>
</div>
    {/* <img className="Back" src="https://www.wildz.com/cdn/2021/09/30/wildz-blog-online-casino-2_uid_6155c3688c52d.jpeg?&cover=true" class="img-fluid" alt=""/>  */}
     {/* <Card/>  */}
    </div>
    <Footer/>
    </div>

    
    
	);
};

export default Home;
