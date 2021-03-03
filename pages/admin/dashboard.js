import React from "react";
import Link from "next/link";

// import img2 from '../assets/img/brand/logo-bima.png'

const Dashboard = () => {
  
  return (

    
  
      <div className='sport_manager_dashboard'>
        <div> 
          <Link href="/auth/login"  onClick={(e) => e.preventDefault()}>
            <small className="btn btn-danger m-auto">Iniciar sesion</small>
          </Link>
        </div>
       
      </div>
       
                    
     
  );
};



export default Dashboard;
