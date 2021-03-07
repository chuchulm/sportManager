import { useEffect, useState } from "react";
import { Modal, Button, Input, Tooltip } from 'antd';
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';
import {v4 as uuidv4} from 'uuid';

import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { removeError, setError, uiCloseModal, uiOpenModal } from "../../actions/ui";
import { sedeAddNew } from "../../actions/sedes";







const ModalScreen = () => {

  const {modalOpen } = useSelector(state => state.ui)
  const { msgError } = useSelector(state => state.ui)
 
   
  const dispatch = useDispatch()
   

     


  const [ formValues , handleInputChange, reset  ] = useForm({ 
    name:'',
    
  });

  const { name } = formValues;

   

  

  
   
  
   
    
  const handleSubmit = (e) => {
   e.preventDefault();
    
    const newSede = {
      id: uuidv4(),
    }

     
  
    if ( name.trim().length === 0 ){ return msgError;
    }else {dispatch( sedeAddNew({...formValues, id:newSede}) ) }
    reset()
    
    if( isFormValid() ){
     dispatch( uiCloseModal())
     console.log("correcto")
    }
    
  }

  const isFormValid = () => {
    
     
    if ( name.trim().length === 0 ){
      dispatch( setError('name is required'))
      return false;
    }

     dispatch( removeError())
    return true;
  }


  const showModal = () => {
    
    dispatch( uiOpenModal() )
    
  };
  
  
  const handleOk = () => {
    setState({ loading: true });
    setTimeout(() => {
      setState({ loading: false, visible: false });
    }, 3000);
  };


  const handleCancel = () => {
   
    dispatch( uiCloseModal() )
  
  };

  
  


  


    return (
      <>
       
         

        <Button  shape="round" onClick={showModal} style={{background: '#da0024', color: '#ffff', width: '250px'}}>
          Agregar sede
        </Button>

        <Modal
          visible={modalOpen}
          title="Agregar sede"
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[

        <Button key="back" shape="round" onClick={handleCancel} style={{background: ''}}>
          Return
        </Button>,
        
        <Button key="submit" shape="round"  onClick={handleSubmit} style={{background: '#da0024', color: '#ffff'}} >
          Enviar
        </Button>,
          ]}
        >


          <div className="container">
            <div className="row">
              <div className="col-6">
                <label htmlFor="">Sede</label>
                <Input
                 placeholder=""
                 type="text"
                 name="name"
                 className="form-control"
                 autoComplete="off"
                 value={ name }
                 onChange={ handleInputChange }
                 
                 suffix={
                 <Tooltip title="Campo obligatorio">
                   <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                 </Tooltip>
                 }
                />     

                 {
                    msgError &&
                      (
                        <div className="sport-alert">
                           Debes agregar una sede!!
                        </div>
                      )
                 }





              
              </div>
            </div>
          </div>

          
         
        </Modal>
      </>
    );
  
}

export default ModalScreen; 


               