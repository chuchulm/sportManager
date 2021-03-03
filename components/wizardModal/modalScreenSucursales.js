import { useEffect, useState } from "react";
import { Modal, Button, Input, Tooltip } from 'antd';
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';
import { useForm } from "../../hooks/useForm";





const ModalScreen = ({ setSede, showModal1, onClose}) => {

  const [state, setState] = useState({loading: false, visible: false});

  const [formValues, handleInputChange, reset ] = useForm({
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
  });

  const { name, email, direccion, localidad, telefono, horarioLunes, horarioMartes, horarioMiercoles,horarioJueves, horarioViernes, horarioSabado, horarioDomingo } = formValues;
  const { visible, loading } = state

console.log(state)

useEffect(() => {
  setState({...state, visible: showModal1})
},[showModal1])

  


  const handleSubmit =(e) => {
    e.preventDefault();

    setSede(name);

    setState({ loading: true });
    
  }


  const showModal = () => {
    setState({
      visible: true,
    });
    
    
  };

  const handleOk = () => {
    setState({ loading: true });
    setTimeout(() => {
      setState({ loading: false, visible: false });
    }, 3000);
  };

  const handleCancel = () => {
     setState({ visible: false });
     onClose()
  };

  
  


  


    return (
      <>
       
         

        <Button  shape="round" onClick={showModal} style={{background: '#da0024', color: '#ffff', width: '250px'}}>
          Agregar sede
        </Button>

        <Modal
          visible={visible}
          title="Agregar sede"
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[

        <Button key="back" shape="round" onClick={handleCancel} style={{background: ''}}>
          Return
        </Button>,
        
        <Button key="submit" shape="round" loading={loading} onClick={handleSubmit} style={{background: '#da0024', color: '#ffff'}} >
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
                 <Tooltip title="Direccion de la Sede">
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
                 <Tooltip title="Direccion de la Sede">
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
                 <Tooltip title="Campo obligatorio">
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
                 <Tooltip title="Localidad">
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
                 <Tooltip title="Direccion de la Sede">
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
                 <Tooltip title="Direccion de la Sede">
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
                 <Tooltip title="Direccion de la Sede">
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
                 <Tooltip title="Campo obligatorio">
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
                 <Tooltip title="Localidad">
                   <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                 </Tooltip>
                 }
                />     
              </div>
            </div>
          </div>

          
         
        </Modal>
      </>
    );
  
}

export default ModalScreen; 




