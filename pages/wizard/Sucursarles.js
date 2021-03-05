import React from 'react'
import ModalScreen from '../../components/wizardModal/modalScreenSucursales'





import { useDispatch, useSelector } from 'react-redux';
import { uiCloseModal, uiOpenModal } from '../../actions/ui';





const Sucursales = () => {


    const { data } = useSelector(state => state.sede)
   

    console.log(data)
    

    const dispatch = useDispatch()

    
    const showModal = () => {
    
        dispatch( uiOpenModal() )
        
    };

      const handleCancel = () => {
        dispatch( uiCloseModal() )
      };

    
    

    return (
        <div className="sucursales">

             <h1>Crea tus sucursales</h1>
            <div className='title-sucursal'>
                <h4>Las sucursales son los centros deportivos que tu marca tiene o bien si eres entrenador tu nombre.</h4>
            </div>
            
            <div className="mt-4 ">
                <div className="row">
                    <lu className=" form-sucursal"> 
                        {
                            data.map( sede => (
        
                          
                                <li className="list-model list-group-item" key={sede.id} >
                                   
                                    <div>Sede:</div>
                                    <div className="ml-5">{sede.name}</div>
                                    <div>
                                       <i class="fas fa-pen mr-2 cursor ml-5" onClick={ showModal }></i>
                                       <i class="fas fa-trash-alt cursor ml-2" onClick={ handleCancel}></i>
                                    </div>
                                    
                                
                                </li>
                           
                            ))
                        }
                    </lu>
                </div>

                <div className=' m-top'>
                    <ModalScreen/>
                </div>

            </div>
        </div>
    )
}
export default Sucursales;


