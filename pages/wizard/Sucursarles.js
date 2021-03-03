import React, { useState } from 'react'
import ModalScreen from '../../components/wizardModal/modalScreenSucursales'





const Sucursales = () => {

    

        
    const [sede, setSede] = useState('');
    const [showModal1, setShowModal1] = useState( false );
    
   

    

    return (
        <div className="sucursales">

             <h1>Crea tus sucursales</h1>
            <div className='title-sucursal'>
                <h4>Las sucursales son los centros deportivos que tu marca tiene o bien si eres entrenador tu nombre.</h4>
            </div>
            
                
            <div className="mt-4 form-sucursal">
                <div className="row">
                    <div className=" col-1 title-sede">
                        <p>Sede:{sede}</p>
                    </div>
                
                    <div className='col-8'>
                    
                    </div>
                    
                    <div className='col-2'>
                        <i class="fas fa-pen mr-2 cursor" onClick={()=> setShowModal1(true)}></i>
                        <i class="fas fa-trash-alt cursor" onClick={()=> setShowModal1(true)}></i>
                    </div>
                </div>
            </div>
              
            <div className='mt-3'>
                <ModalScreen setSede={setSede}  showModal1={showModal1} onClose={()=>setShowModal1(false)}/>
            </div>
        </div>
    )
}
export default Sucursales;