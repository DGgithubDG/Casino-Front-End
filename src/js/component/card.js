import React, {useState }from "react";
import { FcApproval } from "react-icons/fc";
import { FcBullish } from "react-icons/fc";
import { FcLink } from "react-icons/fc";




//create your first component
const Card = () => {
	return (
    <div className="carddiv">
    <div><div className="imgimg">
     
     <img src="https://www.thesun.co.uk/wp-content/uploads/2020/03/roulette-wheel.jpg?crop=0px%2C35px%2C300px%2C200px&resize=350%2C200" class="rounded" alt="..."/>
     </div></div>
    
        <div class="card-group">

    <div className="background">
		<div className="card text-center">
            <span className="myClass"> </span>

  <div class="card-body">
    <h5 class="card-title text-center">WELCOME TO KING J</h5>
    <p class="card-text"><ul><FcApproval/><strong>Always the best odds with King J</strong></ul><ul><FcBullish/><strong>Quick and easy deposits & withdrawals</strong></ul><ul><FcLink/><strong>Focus on transparency, responsibility, and security</strong></ul> </p>
    <a href="#" class="text-center btn btn-success">REGISTER</a>
  </div>
</div>
</div>
</div>
</div>

	);
};

export default Card;
