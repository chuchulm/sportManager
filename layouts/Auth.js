import React from "react";
// reactstrap components
import { Container, Row, Col } from "reactstrap";
import imgFondo from '../assets/img/brand/fondobimate.jpg'

// core components
import AuthNavbar from "components/Navbars/AuthNavbar.js";


import routes from "routes.js";

function Auth(props) {
 
  return (
    <>
      <div className="bg-loginImg">
        <img src={imgFondo} alt="" className='imgAuth-login'/>
         
        <div className="header py-7 py-lg-10 ">
          
          <div className="separator separator-bottom separator-skew zindex-100">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
            
            </svg> */}
          </div>
        </div>
    
        <Container className="mt--8 pb-5">
          <Row className="justify-content-center">{props.children}</Row>
        </Container>
      </div>
   
    </>
  );
}

export default Auth;


// bg-gradient-info