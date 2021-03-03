import React, { useState } from 'react'
import ModalScreenSalas from '../../components/wizardModal/modalScreenSalas';



const Salas = () => {

    
   const [sala1, setSala1] = useState('');
   const [showModal2, setShowModal2] = useState( false );



    return (
        <div>

            
            <div className="sucursales">

                <h1>Crea tus Salas</h1>
                <div className='title-sucursal'>
                   <h4>Tus centros deportivos tienen salas en donde se realizan actividades, como un SUM, BOX, salon de musculacion, etc.</h4>
                </div>
                

                <div className=''><p>Sede: </p></div>
                   
                <div className=" form-sucursal">
                    <div className="row">
                        <div className=" col-1 title-sede">
                           <p>Sala:{sala1}</p>
                        </div>
                   
                        <div className='col-7 '></div>
                       
                        <div className='col-2'>
                           <i class="fas fa-pen mr-2 cursor" onClick={()=> setShowModal2(true)}></i>
                           <i class="fas fa-trash-alt cursor"></i>
                        </div>
                    </div>
                </div>
                 
                <div className='mt-2'>
                   <ModalScreenSalas  setSala1={setSala1} showModal2={showModal2} onClose1={()=>setShowModal2(false)}/>
                </div>

                {/* <div className='mt-2'><p>Salas</p></div>

                <div className="form-sucursal">
                   <div className="row">
                        <div className=" col-1 title-sede">
                           <p>Sala:{}</p>
                        </div>
                   
                        <div className='col-7 pr-5'></div>
                       
                        <div className='col-2'>
                           <i class="fas fa-pen mr-2 cursor" onClick={() => handleChange()}></i>
                           <i class="fas fa-trash-alt cursor"></i>
                        </div>
                    </div>
                </div>
                 
                
                <div className=" mt-1 form-sucursal">
                    <div className="row">
                        <div className=" col-1 title-sede">
                           <p>Sala:{}</p>
                        </div>
                   
                        <div className='col-7 pr-5'></div>
                       
                        <div className='col-2'>
                           <i class="fas fa-pen mr-2 cursor" onClick={() => handleChange()}></i>
                           <i class="fas fa-trash-alt cursor"></i>
                        </div>
                    </div>
                </div>
                 
                <div className='mt-2'>
                   <ModalScreenSalas/>
                </div> */}
            </div>
        </div>
    )
}

export default Salas;
