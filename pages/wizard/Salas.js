import React, { useState } from 'react'
import ModalScreenSalas from '../../components/wizardModal/modalScreenSalas';

import { useDispatch, useSelector } from 'react-redux';
import { uiCloseModal, uiOpenModal, uiOpenModalSala } from '../../actions/ui';
import { salaRemove, salaUpdate } from '../../actions/salas';
import { Modal, Button, Input, Tooltip, } from 'antd';
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';






const Salas = () => {

    

     
   const { data } = useSelector(state => state.sede)
   const { dataSala } = useSelector(state => state.sala)
   const dispatch = useDispatch()
   //  const showModal =    () => {dispatch( uiOpenModalSala()  )};
   //  const handleCancel = () => {dispatch( uiCloseModal() )};
   




   const [modal, setModal] = useState({loading: false, visible: false,})

   const [actualizarModal, setActualizarModal] = useState({name:''})

    const {name} = actualizarModal

     



// Actualizar sala

  const actualizarSala = (sala, caso) => {
     setActualizarModal(sala);
     showModal()
  }


  const handleInputChange = ({ target }) => {
     setActualizarModal({

         ...actualizarModal,
         [ target.name ]: target.value
     })
   
  }

  

  const editar=()=> {
   
     {dispatch( salaUpdate( actualizarModal )   )}
     setModal({ visible: false });
  
  } 





  // Borrar sala



  const handleRemove = () => {

      
    
        {dispatch( salaRemove( actualizarModal) )}
       
  } 


  

      


       




      // control Modal 


   const showModal = () => {
     setModal({
       visible: true,
     });
   };

   const handleOk = () => {
     setModal({ loading: true });
     setTimeout(() => {
       setModal({ loading: false, visible: false });
     }, 3000);
   };

   const handleCancel = () => {
     setModal({ visible: false });
   };

   
   const { visible, loading } = modal;




    const cities = data
    

      const newArray = () =>  cities.slice(0 , 1);
      
     console.log(newArray)
   
 
    return (

   <>
   <div>
         
         <Modal
          visible={visible}
          title="Title"
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <Button key="back" onClick={handleCancel}>
              Return
            </Button>,
            <Button key="submit" type="primary" loading={loading} onClick={()=>editar()}>
              Submit
            </Button>,
          ]}
         >
          <div className="container">
            <div className="row">
               <div className="col-6">
                <label htmlFor="">Sala</label>
                <Input
                 placeholder=""
                 type="text"
                 name="name"
                 className="form-control"
                 autoComplete="off"
                 value={ actualizarModal&&actualizarModal.name}
                 onChange={ handleInputChange }
                 
                 suffix={
                 <Tooltip title="Campo obligatorio">
                   <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                 </Tooltip>
                 }
                />     

                 
               </div>
            </div>
          </div>



         </Modal>
      </div>








        <div className="sucursales ">

             <h1>Agrega tus salas</h1>
            <div className='title-sucursal'>
                <h4>Las sucursales son los centros deportivos que tu marca tiene o bien si eres entrenador tu nombre.</h4>
            </div>
            
            <div className="mt-4 ">
                <div className="row ">
                    <div className="col-9 m-auto">

                    { 
                       
                       data.map( sede => ( <div> <p><b>Sede:</b> {sede.name}</p></div>) )
                        

                     }
                     
                     
                      
                        <lu className=" form-sucursal"> 
                            {
                                dataSala.map( sala => (
            
                              
                                    <li className="list-model list-group-item" key={sala.id} >
                                       
                                        <div> <b>Sala:</b></div>
                                        <div className="ml-5">{sala.name}</div>
                                        <div>
                                           <i class="fas fa-pen mr-2 cursor ml-5" onClick={()=> actualizarSala(sala, "editar") }></i>
                                           <i class="fas fa-trash-alt cursor ml-2" onClick={ handleRemove}></i>
                                        </div>
                                        
                                    
                                    </li>
                               
                                ))
                           }
                        </lu>
                    </div>
                </div>

                <div className='col-12 mt-2'>
                    <ModalScreenSalas/>
                </div>

            </div>
        </div>

    </>

    )


}
export default Salas;











  
  











































































// import React, { useState } from 'react'
// import ModalScreenSalas from '../../components/wizardModal/modalScreenSalas';
// import { useDispatch, useSelector } from 'react-redux';


// const Salas = () => {

//    const { data } = useSelector(state => state.sede)
//    const [sala1, setSala1] = useState('');
//    const [showModal2, setShowModal2] = useState( false );



//     return (
//         <div>
//             <div className="sucursales">

//                 <h1>Crea tus Salas</h1>
//                 <div className='title-sucursal'>
//                    <h4>Tus centros deportivos tienen salas en donde se realizan actividades, como un SUM, BOX, salon de musculacion, etc.</h4>
//                 </div>
                
//                <div className=" form-sucursal">
//                      <div className="row">
//                         <div className=" col-1 title-sede">

//                         <lu className=" form-sucursal"> 

//                            <li className="list-model list-group-item" >
                                    
//                               <div> <b>Sala:</b> <div className="ml-5"></div></div>
                                  
//                                       <div>
//                                          <i class="fas fa-pen mr-2 cursor ml-5" onClick={()=> setShowModal2(true)}></i>
//                                          <i class="fas fa-trash-alt cursor ml-2" onClose1={()=>setShowModal2(false)}></i>
//                                       </div>
//                            </li>
//                         </lu>    
//                      </div>
//                </div>
                 
//                 <div className='mt-2'>
//                    <ModalScreenSalas  setSala1={setSala1} showModal2={showModal2} onClose1={()=>setShowModal2(false)}/>
//                 </div>

                
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Salas;
