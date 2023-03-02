import React, {useState }from "react";
import { FcApproval } from "react-icons/fc";
import { FcBullish } from "react-icons/fc";
import { FcLink } from "react-icons/fc";




//create your first component
const Card = () => {
	return (
   
    <div className="pagesBackground">
    <div>
      <div>
        <div className="main-content">
          <div
            className="page-hero pb-8 pt-5 pt-lg-8 d-flex align-items-center"
           
          >
            <div className="container">
              <div className="text-on-image col-xl-6 col-md-8 col-sm-11 col-11">
                
               
              </div>
            </div>
          </div>

          {/*---------------------------------------------------- Description--------------------------------------------------- */}

          <div className="container-fluid mt-3">
            <div className="row">
              <div className="col-xl-6 order-xl-2 mb-5 mb-xl-0">
                <div className="card card-profile ">
                  <div className="pageDescriptionContainerRigth  pt-md-4 pb-0 pb-md-4">
                    <h2 className="description-title">
                      EAT ORGANIC DELECICACIES
                    </h2>
                    <div className="description-content">
                      <p className="description-content">
                        An unforgettable safari experience also requires great
                        food. Our chefs are the ones that will make your
                        culinary experience remarkable. Homemade menus
                        prepared with organic packages according to any diet
                        requirements that our guests might have. No buffet is
                        served.
                      </p>
                      <p className="description-content">
                        Our delicious picnic bush breakfasts and lunches in
                        carefully selected sites will be part of your
                        unforgettable safari memories.
                      </p>
                    </div>
                    <div className="row justify-content-center mt-4 p-3">
                        <button
                          type="button"
                          className="btn btn-cream col-12 "
                        >
                          BOOK WITH US
                        </button>
                    </div>
                  </div>
                </div>
              </div>

              {/*---------------------------------------------------- Carousel--------------------------------------------------- */}

              <div className="col-xl-6 order-xl-1">
                <div className="card ">
                  <div className="">
                    <div className=" border-0   pb-0 ">
                      <div className="carouselContainerLeft">
                  
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

   

        <footer className="footer">
          <div className="row align-items-center justify-content-xl-between">
            <div className="col-xl-6 m-auto text-center"></div>
          </div>
        </footer>
      </div>
    </div>
  </div>
	);
};

export default Card;


// <div className="carddiv">
// <div><div className="imgimg">
 
//  <img src="https://www.thesun.co.uk/wp-content/uploads/2020/03/roulette-wheel.jpg?crop=0px%2C35px%2C300px%2C200px&resize=350%2C200" class="rounded" alt="..."/>
//  </div></div>

//     <div class="card-group">

// <div className="background">
// <div className="card text-center">
//         <span className="myClass"> </span>

// <div class="card-body">
// <h5 class="card-title text-center">WELCOME TO KING J</h5>
// <p class="card-text"><ul><FcApproval/><strong>Always the best odds with King J</strong></ul><ul><FcBullish/><strong>Quick and easy deposits & withdrawals</strong></ul><ul><FcLink/><strong>Focus on transparency, responsibility, and security</strong></ul> </p>
// <a href="#" class="text-center btn btn-success">REGISTER</a>
// </div>
// </div>
// </div>
// </div>
// </div>