import React, {useState }from "react";
import { FcApproval } from "react-icons/fc";
import { FcBullish } from "react-icons/fc";
import { FcLink } from "react-icons/fc";




//create your first component
const Card = () => {
	return (
		<div className="card" >
            <span className="myClass" style={{float : 'left', paddingRight : '5px'}} > </span>

  <div class="card-body">
    <h5 class="card-title text-center">WELCOME TO KING J</h5>
    <p class="card-text"><ul><FcApproval/>Always the best odds</ul><ul><FcBullish/>Quick and easy deposits & withdrawals</ul><ul><FcLink/>Focus on transparency, responsibility, and security</ul> </p>
    <a href="#" class="text-center btn btn-success">REGISTER</a>
  </div>
</div>
	);
};

export default Card;
