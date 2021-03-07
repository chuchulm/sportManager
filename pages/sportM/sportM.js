import React from 'react'
import Link from "next/link";

const WelcomeSportM = () => {
    return (
        <div className='WelcomeSportManager'>
            <div className='box-sport-manager'>
                <div><h1>“Bienvenido a Sport Manager"</h1></div>

                <div> 
                    <p>
                       Estamos felices de que nos hayas escogido para trabajar contigo. Vamos a comenzar configurando tu
                       sistema, es importante que prestes atención en los próximos pasos y los completes con
                       detalle para un óptimo funcionamiento”
                    </p>
                </div>

                <div>
                   <Link href="/wizard/wizard"  onClick={(e) => e.preventDefault()}>
                    <div className=" boton-inicial"> 
                        <span className='boton-inicial-span'>Siguiente</span>
                    </div>
                   </Link>
                </div>
            </div>
        </div>
    )
}

export default WelcomeSportM;
