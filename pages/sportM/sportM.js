import React from 'react'
import Link from "next/link";

const WelcomeSportM = () => {
    return (
        <div className='WelcomeSportManager'>
             <div><h1>“Bienvenido a Sport Manager"</h1></div>

             <div> 
                 <p>
                    estamos felicesde que nos hayas escogido para trabajar contigo. Vamos a comenzar configurando tu
                    sistema, es importante que prestes atención en los próximos pasos y los completes con
                    detalle para un óptimo funcionamiento”
                 </p>
             </div>
             
             <div>
                <Link href="/wizard/wizard"  onClick={(e) => e.preventDefault()}>
                 <small className="btn btn-danger m-auto">Siguiente</small>
                </Link>
             </div>
            
           

            
        </div>
    )
}

export default WelcomeSportM;
