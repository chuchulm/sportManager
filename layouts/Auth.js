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
         
        <Container className="bg-auth-Login">
          <Row className="justify-content-center ">{props.children}</Row>
        </Container>
      </div>
   
    </>
  );
}

export default Auth;


// bg-gradient-info