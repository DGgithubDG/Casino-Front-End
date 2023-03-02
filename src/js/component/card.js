import React, {useState }from "react";
import { FcApproval } from "react-icons/fc";
import { FcBullish } from "react-icons/fc";
import { FcLink } from "react-icons/fc";




//create your first component
const Card = () => {
	return (
    <div className="carddiv">
  
        <div class="card-group">

    <div className="background">
		<div className="card text-center">
            <span className="myClass" style={{float : 'left', paddingRight : '5px'}} > </span>

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
