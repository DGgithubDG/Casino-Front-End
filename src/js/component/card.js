import React, {useState }from "react";
import { FcApproval } from "react-icons/fc";
import { FcBullish } from "react-icons/fc";
import { FcLink } from "react-icons/fc";




//create your first component
const Card = () => {
	return (
  

         
                  
 <div className="Main-Card"> 
 
  {/* <img src="https://www.gamblingnews.com/wp-content/uploads/2021/09/best-slot-machine-strategies-blog-post.jpg" class="rounded" alt="..."/> */}
   
  <div class="Getov" >
  <div class="card-header text-center">
    
    <h5>KING J</h5>
  </div>
  <div className="kon">
  <ul class="list-group list-group-flush">
    <li class="list-group-item text-center"><FcApproval/>An item</li>
    <li class="list-group-item text-center"><FcBullish/>A second item</li>
    <li class="list-group-item text-center"><FcLink/>A third item</li>
    <li class="list-group-item text-center"><button type="button" class="btn btn-success">REGISTER</button>
</li>
  </ul>
  </div>
</div>
</div>
	);
};

export default Card;


