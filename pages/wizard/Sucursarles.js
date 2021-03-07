import React, { useState } from 'react'
import ModalScreen from '../../components/wizardModal/modalScreenSucursales';

import { useDispatch, useSelector } from 'react-redux';
import { uiCloseModal, uiOpenModal, uiOpenModalSala } from '../../actions/ui';
import { sedeRemove, sedeUpdate } from '../../actions/sedes';
import { Modal, Button, Input, Tooltip, } from 'antd';
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';






const Salas = () => {

    

     
   const { data } = useSelector(state => state.sede)
  
   const dispatch = useDispatch()
   //  const showModal =    () => {dispatch( uiOpenModalSala()  )};
   //  const handleCancel = () => {dispatch( uiCloseModal() )};
   




   const [modalSede, setModalSede] = useState({loading: false, visible: false,})

   const [actualizarModalSede, setActualizarModalSede] = useState({
    name:'',
    email:'',
    direccion:'',
    localidad:'',
    telefono:'',
    horarioLunes:'',
    horarioMartes:'',
    horarioMiercoles:'',
    horarioJueves:'',
    horarioViernes:'',
    horarioSabado:'',
    horarioDomingo:''
    })

    const {name, email, direccion, localidad, telefono, horarioLunes, horarioMartes, horarioMiercoles,horarioJueves, horarioViernes, horarioSabado, horarioDomingo} = actualizarModalSede

    //  console.log(actualizarModalSede)



// Actualizar Sede

  const actualizarSede = (sede, caso) => {
     setActualizarModalSede(sede);
     showModal()
  }


  const handleInputChange = ({ target }) => {
     setActualizarModalSede({

         ...actualizarModalSede,
         [ target.name ]: target.value
     })
   
  }

  

  const editar=()=> {
   
     {dispatch( sedeUpdate( actualizarModalSede )   )}
     setModalSede({ visible: false });
  
  } 





  // Borrar Sede



  const handleRemove = () => {

      
    
        {dispatch( sedeRemove( actualizarModalSede, data) )}
       
  } 


  

      


       




      // control Modal 


   const showModal = () => {
     setModalSede({
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
     setModalSede({ visible: false });
   };

   
   const { visible, loading } = modalSede;
  
    

    
    
  
    

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
            <Button key="submit" type="danger" loading={loading} onClick={()=> editar()}>
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
                 value={ actualizarModalSede&&actualizarModalSede.name}
                 onChange={ handleInputChange }
                 
                 suffix={
                 <Tooltip title="Campo obligatorio">
                   <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                 </Tooltip>
                 }
                />     


                <label htmlFor="">Direccion</label>
                <Input
                 placeholder=""
                 type="text"
                 name="direccion"
                 className="form-control"
                 autoComplete="off"
                 value={ direccion }
                 onChange={ handleInputChange }
                 suffix={
                 <Tooltip title="Direccion sede">
                   <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                 </Tooltip>
                 }
                />     
      
                <label htmlFor="">Localidad</label>
                <Input
                 placeholder=""
                 type="text"
                 name="localidad"
                 className="form-control"
                 autoComplete="off"
                 value={ localidad }
                 onChange={ handleInputChange }
                 suffix={
                 <Tooltip title="Localidad">
                   <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                 </Tooltip>
                 }
                />
      
                <label htmlFor="">Telefono</label>
                <Input
                 placeholder=""
                 type="tel"
                 name="telefono"
                 className="form-control"
                 autoComplete="off"
                 value={ telefono }
                 onChange={ handleInputChange }
                 suffix={
                 <Tooltip title="Agregue su telefono">
                   <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                 </Tooltip>
                 }
                />
      
                <label htmlFor="">Email</label>
                <Input
                 placeholder=""
                 type="email"
                 name="email"
                 className="form-control"
                 autoComplete="off"
                 value={ email }
                 onChange={ handleInputChange }
                 suffix={
                 <Tooltip title="Agregue su direccion de email">
                   <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                 </Tooltip>
                 }
                />

                <label htmlFor="">Horario Lunes</label>
                <Input
                 placeholder=""
                 type="text"
                 name="horarioLunes"
                 className="form-control"
                 autoComplete="off"
                 value={ horarioLunes }
                 onChange={ handleInputChange }
                 suffix={
                 <Tooltip title="Horarios">
                   <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                 </Tooltip>
                 }
                />     
      
                
              </div>


              <div className="col-6">
                <label htmlFor="">Horario martes</label>
                <Input
                 placeholder=""
                 type="text"
                 name="horarioMartes"
                 className="form-control"
                 autoComplete="off"
                 value={ horarioMartes }
                 onChange={ handleInputChange }
                 suffix={
                 <Tooltip title="Horarios">
                   <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                 </Tooltip>
                 }
                />     
      
                <label htmlFor="">Horario Miercoles</label>
                <Input
                 placeholder=""
                 type="text"
                 name="horarioMiercoles"
                 className="form-control"
                 autoComplete="off"
                 value={ horarioMiercoles }
                 onChange={ handleInputChange }
                 suffix={
                 <Tooltip title="Horarios">
                   <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                 </Tooltip>
                 }
                />
      
                <label htmlFor="">Horario Jueves</label>
                <Input
                 placeholder=""
                 type="tel"
                 name="horarioJueves"
                 className="form-control"
                 autoComplete="off"
                 value={ horarioJueves }
                 onChange={ handleInputChange }
                 suffix={
                 <Tooltip title="Horarios">
                   <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                 </Tooltip>
                 }
                />
      
                <label htmlFor="">Horario Viernes</label>
                <Input
                 placeholder=""
                 type="text"
                 name="horarioViernes"
                 className="form-control"
                 autoComplete="off"
                 value={ horarioViernes }
                 onChange={ handleInputChange }
                 suffix={
                 <Tooltip title="Horarios">
                   <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                 </Tooltip>
                 }
                />

                <label htmlFor="">Horario Sabado</label>
                <Input
                 placeholder=""
                 type="text"
                 name="horarioSabado"
                 className="form-control"
                 autoComplete="off"
                 value={ horarioSabado }
                 onChange={ handleInputChange }
                 suffix={
                 <Tooltip title="Horarios">
                   <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                 </Tooltip>
                 }
                />     
      
                <label htmlFor="">Horario martes</label>
                <Input
                 placeholder=""
                 type="text"
                 name="horarioDomingo"
                 className="form-control"
                 autoComplete="off"
                 value={ horarioDomingo }
                 onChange={ handleInputChange }
                 suffix={
                 <Tooltip title="Horarios">
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

             <h1>Agrega tus Sede</h1>
            <div className='title-sucursal'>
                <h4>Las sucursales son los centros deportivos que tu marca tiene o bien si eres entrenador tu nombre.</h4>
            </div>
            
            <div className="mt-4 ">
                <div className="row ">
                    <div className="col-9 m-auto">
                   
                      
                        <lu className=" form-sucursal"> 
                            {
                                data.map( sede => (
            
                              
                                    <li className="list-model list-group-item" key={sede.id} >
                                       
                                        <div> <b>Sede:</b></div>
                                        <div className="ml-5">{sede.name}</div>
                                        <div>
                                           <i class="fas fa-pen mr-2 cursor ml-5" onClick={()=> actualizarSede(sede, "editar") }></i>
                                           <i class="fas fa-trash-alt cursor ml-2" onClick={ handleRemove}></i>
                                        </div>
                                        
                                    
                                    </li>
                               
                                ))
                           }
                        </lu>
                    </div>
                </div>

                <div className='col-12 mt-2'>
                    <ModalScreen/>
                </div>

            </div>
        </div>

    </>

    )


}
export default Salas;








































































































// import React, { useState } from 'react'
// import ModalScreen from '../../components/wizardModal/modalScreenSucursales'

// import { useDispatch, useSelector } from 'react-redux';
// import { uiCloseModal, uiOpenModal } from '../../actions/ui';
// import { sedeRemove, sedeUpdate } from '../../actions/sedes';





// const Sucursales = () => {

//     const { data } = useSelector(state => state.sede)
    









//     const showModal =    () => {

//         dispatch( uiOpenModal()

//           )};

//     const handleCancel = () => {

//         dispatch( uiCloseModal()
        
//          )};

//     const handleRemove = () => {

//         dispatch( sedeRemove()  
        
//          )};
    

    
    
  
    

//     return (
//         <div className="sucursales ">

//              <h1>Crea tus sucursales</h1>
//             <div className='title-sucursal'>
//                 <h4>Las sucursales son los centros deportivos que tu marca tiene o bien si eres entrenador tu nombre.</h4>
//             </div>
            
//             <div className="mt-4 ">
//                 <div className="row ">
//                     <div className="col-9 m-auto">
//                         <lu className=" form-sucursal"> 
//                             {
//                                 data.map( sede => (
            
                              
//                                     <li className="list-model list-group-item" key={sede.id} >
                                       
//                                         <div> <b>Sede:</b></div>
//                                         <div className="ml-5">{sede.name}</div>
//                                         <div>
//                                            <i class="fas fa-pen mr-2 cursor ml-5" onClick={ showModal }></i>
//                                            <i class="fas fa-trash-alt cursor ml-2" onClick={ handleRemove}></i>
//                                         </div>
                                        
                                    
//                                     </li>
                               
//                                 ))
//                             }
//                         </lu>
//                     </div>
//                 </div>

//                 <div className='col-12 mt-2'>
//                     <ModalScreen/>
//                 </div>

//             </div>
//         </div>
//     )
// }
// export default Sucursales;


